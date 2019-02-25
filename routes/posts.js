const express = require("express")
const router = express.Router();
const {getAllPosts, getPopularPosts} = require("../db/posts_queries.js")

router.get("/", getAllPosts)
router.get("/popular", getPopularPosts)

module.exports = router;
