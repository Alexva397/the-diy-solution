const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    budget: Number,
    materials: [{
        item: String,
        quantity: Number,
        budgetPrice: Number,
        purchasePrice: Number
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
