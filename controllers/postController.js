const Post = require("../models/post");

class PostController {
  async add(title, content, UserId) {
    return await Post.create({
      title,
      content,
      UserId,
    });
  }
}

module.exports = PostController;
