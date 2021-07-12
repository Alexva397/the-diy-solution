const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {type: String, required: true },
    description: String,
    materials: Array,
    photos: Array,
    docs: Array,

});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
