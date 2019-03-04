const { db } = require("./index.js");

const getAllPosts = (req, res, next) => {
  console.log("get all posts");
  db.any(
    "SELECT posts.*, users.username, subreddits.subreddit_name, CASE WHEN COUNT(DISTINCT comments.*) = 0 THEN SUM(likes.like_type) ELSE SUM(likes.like_type) / COUNT(DISTINCT comments.*) END AS likes, COUNT(DISTINCT comments.*) AS comments FROM posts JOIN users ON posts.poster_id=users.id JOIN subreddits ON posts.subreddit_id=subreddits.id FULL OUTER JOIN likes ON posts.id=likes.post_id FULL OUTER JOIN comments ON comments.post_id=posts.id GROUP BY users.username, posts.id, subreddits.subreddit_name ORDER BY posts.id"
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Got all posts",
        data: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getPopularPosts = (req, res, next) => {
  console.log("get popular posts");
  db.any(
    "SELECT posts.*, users.username, subreddits.subreddit_name, CASE WHEN COUNT(DISTINCT comments.*) = 0 THEN SUM(likes.like_type) ELSE SUM(likes.like_type) / COUNT(DISTINCT comments.*) END AS likes, COUNT(DISTINCT comments.*) AS comments FROM posts JOIN users ON posts.poster_id=users.id JOIN subreddits ON posts.subreddit_id=subreddits.id FULL OUTER JOIN likes ON posts.id=likes.post_id FULL OUTER JOIN comments ON comments.post_id=posts.id GROUP BY users.username, posts.id, subreddits.subreddit_name ORDER BY comments DESC"
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Got all popular posts",
        data: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPosts,
  getPopularPosts
};
