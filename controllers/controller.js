const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.Book.create(req.body)
      .then((response) => res.json(response))
      .catch((err) => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((response) => res.json(response))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((response) => response.remove())
      .then((response) => res.json(response))
      .catch((err) => res.status(422).json(err));
  },
};
