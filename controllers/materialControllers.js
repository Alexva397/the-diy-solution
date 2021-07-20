const db = require('../models');
const mongoose = require('mongoose');

//Not functional yet
module.exports = {
    removeMaterial: function (req, res){
        db.Project.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { materials: { _id: [req.body._id] }} },
          { multi: true }
      ).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      }
}