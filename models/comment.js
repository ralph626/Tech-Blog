const sequelize = require("../utils/db");
const { DataTypes } = require("sequelize");
const Post = require("./post");

const Comment = sequelize.define("Comment", {
  comment: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
});

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Comment;
