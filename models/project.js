const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    //Add document types here
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
