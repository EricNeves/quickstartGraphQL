const express  = require("express");
const http     = require("node:http");
const cors     = require("cors");
const mongoose = require("mongoose");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");

/**
 * Routes
 */
const home = require("./routes/home");
const user = require("./routes/user");

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3333;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

app.use("/", home);
app.use("/users", user);

const { typeDefs, resolvers } = require("./graphql/index.js");

async function initServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  await mongoose.connect(MONGO_URL)

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

  console.log(`⚡Server running on PORT ${PORT}...`);
}
initServer();
