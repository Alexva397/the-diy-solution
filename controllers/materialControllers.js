const db = require('../models');
const mongoose = require('mongoose');

module.exports = {
    removeMaterial: function (req, res){
        db.Project.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { materials: { _id: [req.body._id] }} },
          { new: true }
      ).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      }
}