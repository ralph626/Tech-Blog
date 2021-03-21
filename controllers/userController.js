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
    console.log(userName);
    const user = await User.findOne({ where: { userName } });

    console.log(user.dataValues);
    console.log(password);
    const passwordValid = bcrypt.compareSync(
      password,
      user.dataValues.password
    );
    console.log(passwordValid);
    if (user && passwordValid) {
      return {
        id: user.dataValues.id,
        userName: user.dataValues.userName,
      };
    }
    return false;
  }
}

module.exports = UserController;
