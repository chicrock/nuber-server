import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import {
  UpdateRideStatusMutationArgs,
  UpdateRideStatusResponse,
} from "../../../types/graph";
import Ride from "../../../entities/Ride";
import Chat from "../../../entities/Chat";

const resolvers: Resolvers = {
  Mutation: {
    UpdateRideStatus: privateResolver(
      async (
        _,
        args: UpdateRideStatusMutationArgs,
        { req, pubSub }
      ): Promise<UpdateRideStatusResponse> => {
        const user: User = req.user;
        if (user.isDriving) {
          try {
            let ride: Ride | undefined;

            if (args.status === "ACCEPTED") {
              ride = await Ride.findOne(
                {
                  id: args.rideId,
                  status: "REQUESTING",
                },
                { relations: ["passenger", "driver"] }
              );
              if (ride) {
                user.isTaken = true;
                user.save();

                const chat = await Chat.create({
                  driver: user,
                  passenger: ride.passenger,
                }).save();

                ride.driver = user;
                ride.chat = chat;
                ride.save();
              }
            } else {
              ride = await Ride.findOne(
                {
                  id: args.rideId,
                  driver: user,
                },
                { relations: ["passenger", "driver"] }
              );
            }

            if (ride) {
              if (args.status === "FINISHED") {
                const passenger = await User.findOne({
                  id: ride.passengerId,
                });

                if (passenger) {
                  passenger.isRiding = false;
                  passenger.save();
                }
              }

              ride.status = args.status;
              ride.save();

              pubSub.publish("rideUpdate", { RideStatusSubscription: ride });

              return {
                ok: true,
                error: null,
                rideId: ride.id,
              };
            } else {
              return {
                ok: false,
                error: "Cant update ride",
                rideId: null,
              };
            }
          } catch (error) {
            return {
              ok: false,
              error: error.message,
              rideId: null,
            };
          }
        } else {
          return {
            ok: false,
            error: "You are not driving",
            rideId: null,
          };
        }
      }
    ),
  },
};
export default resolvers;
