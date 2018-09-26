import { withFilter } from "graphql-yoga";
import User from "../../../entities/User";

const resolvers = {
  Subscription: {
    NearbyRideSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("rideRequest"),
        async (payload, _, { context }) => {
          const user: User = context.currentUser;
          const {
            NearbyRideSubscription: { pickupLat, pickupLng },
          } = payload;
          const { lastLat: userLastLat, lastLng: userLastLng } = user;

          return (
            pickupLat >= userLastLat - 0.05 &&
            pickupLat >= userLastLat + 0.05 &&
            pickupLng >= userLastLng - 0.05 &&
            pickupLng >= userLastLng + 0.05
          );
        }
      ),
    },
  },
};
export default resolvers;
