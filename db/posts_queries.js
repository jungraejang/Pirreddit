const {db} = require("./index.js")

const getAllPosts = (req, res, next) => {
  db.any("SELECT posts.*, users.username, subreddits.subreddit_name, SUM(likes.like_type) FROM posts JOIN users ON posts.poster_id=users.id JOIN subreddits ON posts.subreddit_id=subreddits.id FULL OUTER JOIN likes ON posts.id=likes.post_id GROUP BY posts.*, users.username, subreddits.subreddit_name, posts.id ORDER BY SUM(likes.like_type) DESC")
  .then(data => {
    res.status(200).json({
      status: "success",
      message: "Got all posts",
      data: data
    })
  })
  .catch(err => {
      return next(err)
  })
}

const getPopularPosts = (req, res, next) => {
  db.any("SELECT posts.*, users.username, subreddits.subreddit_name, SUM(likes.like_type) FROM posts JOIN users ON posts.poster_id=users.id JOIN subreddits ON posts.subreddit_id=subreddits.id JOIN likes ON posts.id=likes.post_id GROUP BY posts.*, users.username, subreddits.subreddit_name, posts.id ORDER BY SUM(likes.like_type) DESC")
.then(data => {
  res.status(200).json({
    status: "success",
    message: "Got all popular posts",
    data: data
  })
})
.catch(err => {
  return next(err)
})
}

module.exports = {
  getAllPosts,
  getPopularPosts
}
