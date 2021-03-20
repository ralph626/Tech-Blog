const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/write", (req, res) => {
  res.render("newpost");
});

module.exports = router;
