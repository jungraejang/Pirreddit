const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const comments = require("./routes/comments.js");
const session = require("express-session");
const passport = require("./auth/local");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "never gonna give u up",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", users);
app.use("/posts", posts);
app.use("/comments", comments)

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
