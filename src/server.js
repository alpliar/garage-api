require("dotenv").config();

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Require external modules
const mongoose = require("mongoose");

const { DATABASE_DOMAIN, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER } =
  process.env;

const databaseUri = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_DOMAIN}/${DATABASE_NAME}?retryWrites=true&w=majority`;

// Connect to DB
mongoose
  .connect(databaseUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

module.exports = fastify;
