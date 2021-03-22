const router = require("express").Router();
const userId = 11;
const Post = require("../models/post");
const Comment = require("../models/comment");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  console.log(req.session);
  const blog = await Post.findAll({
    where: { userId: req.session.user.id },
    include: [Comment],
  });
  console.log(blog.map((a) => a.dataValues)[0].Comments);
  res.render("index", { blog: blog.map((a) => a.dataValues) });
});

router.get("/post", (req, res) => {
  res.render("newpost");
});
module.exports = router;
