const sequelize = require("../utils/db");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});
User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((e) => {
      console.log("something went wrong");
    });
});

module.exports = User;
