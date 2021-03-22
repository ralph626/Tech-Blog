const Post = require("../models/post");
const Comment = require("../models/comment");

class PostController {
  async add(title, content, UserId) {
    return await Post.create({
      title,
      content,
      UserId,
    });
  }

  async addComment({ comment, author, PostId }) {
    return await Comment.create({
      comment,
      author,
      PostId,
    });
  }
}

module.exports = PostController;
