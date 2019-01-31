import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const allTypes: any[] = fileLoader(path.join(__dirname, "./api/**/*.graphql"));

const allResolvers: any[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const typeDefs: string = mergeTypes(allTypes);
const resolvers: any = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
