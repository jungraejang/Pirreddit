const express = require("express");
const app = express();
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")

let cors = require("cors")
app.use(cors());

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/posts", posts);

app.listen(8080, () => {
  console.log("Listening to port 8080")
})
