import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import {
  CompleteEmailVerificationMutationArgs,
  CompleteEmailVerificationResponse,
} from "../../../types/graph";
import Verification from "../../../entities/Verification";

const resolvers: Resolvers = {
  Mutation: {
    CompleteEmailVerification: privateResolver(
      async (
        _,
        args: CompleteEmailVerificationMutationArgs,
        { req }
      ): Promise<CompleteEmailVerificationResponse> => {
        const user: User = req.user;
        const { key } = args;

        if (user.email) {
          try {
            const verification = await Verification.findOne({
              payload: user.email,
              key,
            });

            if (verification) {
              user.verifiedEmail = true;
              user.save();

              return {
                ok: true,
                error: null,
              };
            } else {
              return {
                ok: false,
                error: "Cannot Verify email",
              };
            }
          } catch (error) {
            return {
              ok: false,
              error: error.message,
            };
          }
        } else {
          return {
            ok: false,
            error: "No email to verify",
          };
        }
      }
    ),
  },
};

export default resolvers;
