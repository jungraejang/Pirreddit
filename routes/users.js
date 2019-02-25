const express = require("express")
const router = express.Router();
const {
  getAllUsers
} = require("../db/users_queries.js")

router.get("/", getAllUsers);

module.exports = router;
