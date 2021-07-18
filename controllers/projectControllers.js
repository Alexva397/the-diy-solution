const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
  findAll: function (req, res) {
    db.Project
      .find(req.query).sort({ _id: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Project
      .aggregate([
        { $match : { _id : mongoose.Types.ObjectId(req.params.id) } },
        {
          $addFields: {
            totalSpent: { $sum: "$materials.purchasePrice" }
          },
        },
      ])
      // .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Project
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { materials: req.body.materials }
        },

        { new: true }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}