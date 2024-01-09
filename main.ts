import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Mutation } from "./resolvers/mutation.ts";
import { Query } from "./resolvers/Query.ts";
import mongoose from "mongoose"
import { typeDefs } from "./gql/schema.ts";
import { Cine } from "./resolvers/Cine.ts";
import { Pelicula } from "./resolvers/Pelicula.ts";
const resolvers={
  Query,
  Mutation,
  Cine,
  Pelicula
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await mongoose.connect(Deno.env.get("MONGO_URL")!);
if(mongoose.connection){console.info("conectado")}
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);