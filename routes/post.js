const router = require("express").Router();
const PostController = require("../controllers/postController");
const session = require("../middleware/session");
const Post = new PostController();

router.post("/", session.requireLogin, async (req, res) => {
  res.json(
    await Post.add(req.body.title, req.body.content, req.session.user.id)
  );
});

module.exports = router;
