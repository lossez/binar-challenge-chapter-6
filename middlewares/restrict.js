module.exports = {
  auth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  },
  isAdmin(req, res, next) {
    if (req.user.role_id === 1) {
      next();
    } else {
      res.redirect("/view/dashboard");
    }
  },
  isCurrentUser(req, res, next) {
    if (req.user.id == req.params.user_id) {
      next();
    } else {
      res.redirect("/view/dashboard");
    }
  },

  isCurrentUserOrAdmin(req, res, next) {
    if (req.user.id === req.session.passport.user || req.user.role_id === 1) {
      next();
    } else {
      res.redirect("/view/dashboard");
    }
  },
};
