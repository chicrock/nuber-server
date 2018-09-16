import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import {
  DeletePlaceMutationArgs,
  DeletePlaceResponse,
} from "../../../types/graph";
import User from "../../../entities/User";
import Place from "../../../entities/Place";

const resolvers: Resolvers = {
  Mutation: {
    DeletePlace: privateResolver(
      async (
        _,
        args: DeletePlaceMutationArgs,
        { req }
      ): Promise<DeletePlaceResponse> => {
        const user: User = req.user;
        const { placeId } = args;

        try {
          const place = await Place.findOne({ id: placeId });

          if (place) {
            if (place.userId !== user.id) {
              return {
                ok: false,
                error: "Not Authorized",
              };
            }

            await place.remove();

            return {
              ok: true,
              error: null,
            };
          } else {
            return {
              ok: false,
              error: "Place not found",
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
