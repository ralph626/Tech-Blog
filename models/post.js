const sequelize = require("../utils/db");
const { DataTypes } = require("sequelize");
const User = require("./user");

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

Post.belongsTo(User);

module.exports = Post;
