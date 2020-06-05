const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASS,
    port: process.env.PGPORT,
  },
  pool: {
    min: 1,
    max: 7,
  },
});

module.exports = knex;
