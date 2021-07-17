const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    materials: [{
        item: String,
        budgetPrice: Number,
        purchasePrice: Number
    }],
    before: [{
        photo: String,
    }],
    progress: [{
        progress: String,
    }],
    after: [{
        after: String,
    }],
    docs: Array,

});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
