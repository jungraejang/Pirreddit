const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/reddit_data")

module.exports = { db }
