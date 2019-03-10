const express = require("express");
const router = express.Router();
const {
  getComments,
  createComment
} = require("../db/comments_queries.js");

const passport = require("../auth/local.js")
const {loginRequired} = require("../auth/helpers.js")

router.get("/:post_id", getComments);
router.post("/create", createComment);
module.exports = router;
