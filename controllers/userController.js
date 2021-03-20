const User = require("../models/user");
const bcrypt = require("bcrypt");

class UserController {
  async add(userName, password) {
    return await User.create({
      userName,
      password,
    });
  }
  async login(userName, password) {
    const user = await User.findOne({
      userName,
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      return {
        id: user.id,
        userName: user.userName,
      };
    }
    return false;
  }
}

module.exports = UserController;
