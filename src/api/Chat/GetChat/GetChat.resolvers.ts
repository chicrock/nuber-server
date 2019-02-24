import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { GetChatResponse, GetChatQueryArgs } from "../../../types/graph";
import User from "../../../entities/User";
import Chat from "../../../entities/Chat";

const resolvers: Resolvers = {
  Query: {
    GetChat: privateResolver(
      async (_, args: GetChatQueryArgs, { req }): Promise<GetChatResponse> => {
        const user: User = req.user;
        const { chatId } = args;

        try {
          const chat = await Chat.findOne(
            {
              id: chatId,
            },
            { relations: ["messages"] }
          );

          if (chat) {
            if (chat.driverId === user.id || chat.passengerId === user.id) {
              return {
                ok: true,
                error: null,
                chat,
              };
            } else {
              return {
                ok: false,
                error: "Not authorized to see the chat",
                chat: null,
              };
            }
          } else {
            return {
              ok: false,
              error: "Chat not found",
              chat: null,
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            chat: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
