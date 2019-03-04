const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers")

const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost:5432/reddit_data"
const db = pgp(connectionString);

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("Local Strategy username: ", username)
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
    .then(user => {
      console.log("Local strategy triggered")
      if(!helpers.comparePass(password, user.password_digest)) {
        console.log("local strategy 1")
        return done(null, false)
      } else {
        console.log("local strategy 2")
        return done(null, user)
      }
    })
    .catch(err => {
      console.log("ERROR!!, ", err)
      return done(err)
    })
  })
)

init();

module.exports = passport
