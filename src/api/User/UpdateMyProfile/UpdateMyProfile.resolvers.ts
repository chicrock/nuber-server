import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import {
  UpdateMyProfileMutationArgs,
  UpdateMyProfileResponse,
} from "../../../types/graph";
import User from "../../../entities/User";
import cleanNullArgs from "../../../utils/cleanNullArgs";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(
      async (
        _,
        args: UpdateMyProfileMutationArgs,
        { req }
      ): Promise<UpdateMyProfileResponse> => {
        const user: User = req.user;
        const notNull: any = cleanNullArgs(args);

        try {
          /// To call BeforeInsert and BeforeUpdate in User entity, use user instance to set password.
          if (notNull.password !== null) {
            user.password = notNull.password;
            user.save();
            delete args.password;
          }
          await User.update({ id: user.id }, { ...notNull });
          return {
            ok: true,
            error: null,
          };
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
