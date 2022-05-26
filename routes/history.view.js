const router = require("express").Router();
const historyView = require("../controllers/history.view.controller");

const restrict = require("../middlewares/restrict");

//admin
router.get("/history", [restrict.auth, restrict.isAdmin], historyView.index);
router.get("/history/new", restrict.auth, historyView.new);
router.get("/history/:id", historyView.show);
router.get("/history/:id/edit", historyView.edit);

//usergame / player
router.get(
  "/user-history/:user_id",
  [restrict.auth, restrict.isCurrentUser],
  historyView.index
);
router.get(
  "/user-history/:user_id/show/:id",
  [restrict.auth, restrict.isCurrentUser],
  historyView.show
);
router.get(
  "/user-history/:user_id/edit/:id",
  [restrict.auth, restrict.isCurrentUser],
  historyView.edit
);

module.exports = router;
