const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/diydb"
);

const projectSeed = [
  {
    title: 'Cottage',
    description: 'Renovation of the mother-in-law cottage.',
    materials: [
      {
        item: 'paint',
        budgetPrice: 150,
        purchasePrice: 200
      },
      {
        item: 'cabinets',
        budgetPrice: 500,
        purchasePrice: 480
      },
    ],
  },
  {
    title: 'Half-Bath Renovation',
    description: 'Giving the half-bath a face-lift.',
    materials: [
      {
        item: 'Paint',
        budgetPrice: 40,
        purchasePrice: 35
      },
      {
        item: "Faucet",
        budgetPrice: 20,
        purchasePrice: 35
      }
    ],
  }
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
