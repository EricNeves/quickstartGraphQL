const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

async function context({ req }) {
  try {
    if (!req.headers.authorization) {
      throw new GraphQLError(
        "User is not authenticated, insert a bearer token.",
        {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        }
      );
    }
  
    const user = jwt.verify(req.headers.authorization, SECRET_KEY)

    return user
  
  } catch (err) {
    throw new GraphQLError(
      "User is not authenticated, insert a valid token.",
      {
        extensions: {
          code: "UNAUTHENTICATED",
          http: { status: 401 },
        },
      }
    );
  }
}

module.exports = {
  context,
};
