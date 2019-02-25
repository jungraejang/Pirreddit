const {db} = require("./index.js")

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
  .then(data => {
    res.status(200).json({
      status: "success",
      message: "Got all users!",
      data: data
    })
  })
  .catch(err => {
    return next(err)
  })
};

module.exports = {
  getAllUsers
}
