module.exports = {
  requireLogin(req, res, next) {
    if (!req.session.user) {
      res.status(401).end();
    } else {
      next();
    }
  },
};
