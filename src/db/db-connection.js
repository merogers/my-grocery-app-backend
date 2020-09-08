const knex = require("knex")({
  client: "pg",
  connection: {
    // Heroku Connection
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    // Docker Compose
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASS,
  },
  pool: {
    min: 1,
    max: 7,
  },
});

module.exports = knex;
