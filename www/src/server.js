const express = require('express')
const http = require('node:http')
const cors =  require('cors')

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3333

app.use(express.json());
app.use(cors());

const { typeDefs, resolvers } = require('./graphql/index.js')
 
async function initServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  await new Promise(resolve => httpServer.listen({ port: PORT }, resolve))

  console.log(`Server running...`)
}
initServer();
