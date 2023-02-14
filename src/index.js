// Import server
const fastify = require("./server.js");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");

fastify.register(require("@fastify/cors"), {
  "Access-Control-Allow-Origin": "*",
});

// Import external dependancies
const mercurius = require("mercurius");

// Import GraphQL Schema
const schema = require("./schema");

// Register Fastify GraphQL
fastify.register(mercurius, {
  schema,
  graphiql: true,
});

// Import Routes
const routes = require("./routes");

// Import Swagger Options
const swagger = require("./config/swagger");

// Register Swagger
fastify.register(fastifySwagger, swagger.swaggerOptions);
fastify.register(fastifySwaggerUi, swagger.swaggerUiOptions);

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.swagger();

    fastify.log.info(`server listening on ${fastify.server.address().port}`);
    fastify.log.info(
      `doc available at ${swagger.swaggerUiOptions.routePrefix}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
