const router = require("express").Router();
const UserController = require("../controllers/userController");
const { restore } = require("../models/user");
const session = require("../middleware/session");
const User = new UserController();

router.post("/register", async (req, res) => {
  console.log(req.body);
  const user = await User.add(req.body.userName, req.body.password);
  req.session.user = user;
  res.json({ user: { userName: user.userName, id: user.id } });
});

router.post("/login", async (req, res) => {
  console.log("LOGGING IN ", req.body);
  const user = await User.login(req.body.userName, req.body.password);
  if (!user) {
    res.status(401).end();
  }
  req.session.user = user;
  res.json({
    user,
  });
});

router.get("/", session.requireLogin, async (req, res) => {
  console.log(req.session);
  res.json(req.session.user);
});

router.post("/logout", async (req, res) => {
  delete req.session.user;
  res.json({
    msg: "logout",
  });
});

module.exports = router;
