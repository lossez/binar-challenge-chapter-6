const router = require("express").Router();

const restrict = require("../middlewares/restrict");

router.get("/view/dashboard", restrict.auth, (req, res) => {
  const user = req.user;
  res.render("dashboard/index", { user });
});
router.get("/view/profile", restrict.auth, (req, res) => {
  const user = req.user;
  res.render("dashboard/profile", { user });
});
module.exports = router;
