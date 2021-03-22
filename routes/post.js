const router = require("express").Router();
const PostController = require("../controllers/postController");
const session = require("../middleware/session");
const Post = new PostController();

router.post("/", async (req, res) => {
  console.log(req.body);
  res.json(await Post.add(req.body.title, req.body.content, req.body.userId));
});

router.post("/comment", async (req, res) => {
  console.log(req.body);
  const data = await Post.addComment({ ...req.body });
  console.log(data);
});

module.exports = router;
