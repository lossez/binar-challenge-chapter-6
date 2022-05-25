const {
  user_game,
  user_game_biodata,
  user_game_history,
} = require("../models");

module.exports = {
  index: (req, res) => {
    let user = req.user;
    if (req.user.role_id === 2) {
      return user_game_history
        .findAll({
          where: {
            user_id: req.session.passport.user,
          },
          include: [
            {
              model: user_game,
              as: "user_game",
              include: [
                {
                  model: user_game_biodata,
                  as: "user_game_biodata",
                  attributes: ["first_name", "last_name"],
                },
              ],
            },
          ],
        })
        .then((result) => {
          res.render("history/index", { result, user });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error",
            data: err,
          });
        });
    } else {
      result = user_game_history
        .findAll({
          include: [
            {
              model: user_game,
              as: "user_game",
              include: [
                {
                  model: user_game_biodata,
                  as: "user_game_biodata",
                  attributes: ["first_name", "last_name"],
                },
              ],
            },
          ],
        })
        .then((result) => {
          res.render("history/index", { result, user });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error",
            data: err,
          });
        });
    }
  },
  show: (req, res) => {
    user_game_history
      .findByPk(req.params.id, {
        include: [
          {
            model: user_game,
            as: "user_game",
            attributes: ["username"],
            include: [
              {
                model: user_game_biodata,
                as: "user_game_biodata",
                attributes: ["first_name", "last_name"],
              },
            ],
          },
        ],
      })
      .then((result) => {
        const user = req.user;
        res.render("history/show", { result, user });
      });
  },
  new: (req, res) => {
    user_game
      .findAll({
        attributes: ["id"],
        where: {
          role_id: 2,
        },
      })
      .then((result) => {
        const user = req.user;
        res.render("history/new", { result, user });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
          data: err,
        });
      });
  },

  edit: (req, res) => {
    user_game_history
      .findByPk(req.params.id)
      .then((result) => {
        if (!result) {
          return res.redirect("/view/history");
        }
        const user = req.user;
        res.render("history/edit", { result, user });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error",
          data: err,
        });
      });
  },
};
