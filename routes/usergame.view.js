const router = require("express").Router();
const userView = require("../controllers/usergame.view.controller");

router.get("/usergame", userView.index);
router.get("/usergame/new", userView.new);
router.get("/usergame/:id", userView.show);
router.get("/usergame/:id/edit", userView.edit);

module.exports = router;
