const router = require("express").Router();
const userId = 11;
const Post = require("../models/post");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  const blog = await (await Post.findAll({ where: { userId } })).map(
    (a) => a.dataValues
  );
  console.log(blog);
  res.render("index", { blog });
});

router.get("/post", (req, res) => {
  res.render("newpost");
});
module.exports = router;
