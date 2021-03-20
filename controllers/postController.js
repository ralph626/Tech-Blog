const Post = require("../models/post");

class PostController {
  async add(title, content, userId) {
    return await Post.create({
      title,
      content,
      userId,
    });
  }
}

module.exports = PostController;
