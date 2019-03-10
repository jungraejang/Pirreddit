const { db } = require("./index.js");

const getComments = (req, res, next) => {
  console.log("get Comments");
  console.log(req);
  db.any(
    "SELECT comments.*, users.username FROM comments JOIN users ON users.id=comments.commenter_id WHERE comments.post_id=${post_id} ORDER BY comments.post_id",
    { post_id: req.params.post_id }
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "comments received successfully",
        data: data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

const createComment = (req, res, next) => {
  console.log(req.body)
  db.none(
    "INSERT INTO comments (body, commenter_id, post_id) VALUES (${body}, (SELECT users.id FROM users WHERE users.username=${commenter_username}), ${post_id})",
    {
      body: req.body.body,
      commenter_username: req.body.commenter_username,
      post_id: req.body.post_id
    }
  )
  .then(() => {
    res.status(200).json({
      message: "comment created!"
    })
  })
  .catch(err => {
    res.status(500).json({
      message: err
    })
  })
};

module.exports = {
  getComments,
  createComment
};
