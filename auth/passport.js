const passport = require("passport");
const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost:5432/reddit_data";
const db = pgp(connectionString);

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("SERIALIZE?", user)
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        console.log("HELLO? ", user.username)
        done(null, user.username);
      })
      .catch(err => {
        console.log("ERROR, ", err)
        done(err, null);
      });
  });
};
