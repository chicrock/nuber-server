import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { GetRideResponse, GetRideQueryArgs } from "../../../types/graph";
import User from "../../../entities/User";
import Ride from "../../../entities/Ride";

const resolvers: Resolvers = {
  Query: {
    GetRide: privateResolver(
      async (_, args: GetRideQueryArgs, { req }): Promise<GetRideResponse> => {
        const user: User = req.user;
        const rideId: number = args.rideId;

        try {
          const ride = await Ride.findOne(
            {
              id: rideId,
            },
            { relations: ["driver", "passenger"] }
          );

          if (ride) {
            if (ride.passengerId === user.id || ride.driverId === user.id) {
              return {
                ok: true,
                error: null,
                ride,
              };
            } else {
              return {
                ok: false,
                error: "Not authrized",
                ride: null,
              };
            }
          } else {
            return {
              ok: false,
              error: "Ride not found",
              ride: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            ride: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
