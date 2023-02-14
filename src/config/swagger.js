exports.swaggerOptions = {
  swagger: {
    info: {
      title: "Fastify API",
      description:
        "Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  exposeRoute: true,
};

exports.swaggerUiOptions = {
  // baseDir: '/path',
  routePrefix: "/documentation",

  // uiConfig: {
  //   docExpansion: "full",
  //   deepLinking: false,
  // },
  // uiHooks: {
  //   onRequest: function (request, reply, next) {
  //     next();
  //   },
  //   preHandler: function (request, reply, next) {
  //     next();
  //   },
  // },
  // staticCSP: true,
  // transformStaticCSP: (header) => header,
};
