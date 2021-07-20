const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
  findAll: function (req, res) {
<<<<<<< HEAD
    
    db.Project
      .find({userId: req.params.userId}).sort({ _id: 1 })
      .then(dbModel => 
        res.json(dbModel))
=======
    console.log(req)
    db.Project
      .find({ userId: req.user }).sort({ _id: 1 })
      .then(dbModel => res.json(dbModel))
>>>>>>> 727dd1e131cfd3ce081822395fc9ef2a43956f35
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