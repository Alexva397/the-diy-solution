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
    photos: [
      {
        before: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png',
        progress: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png',
        after: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
      }
    ],
    docs: [
      {
        receipts: [
          {
            1: 'https://makereceipt.com/impImages/restaurantCreditDefault.jpg'
          },
          {
            2: 'https://i.pinimg.com/474x/89/7b/96/897b96d3dae8f52beb36d1f58193343b.jpg'
          }
        ],
        manuals: [
          {
            1: 'How To Build a Cottage'
          }
        ],
        contractor: [
          {
            name: 'Katy Chadwell'
          },
          {
            phone: 555 - 555 - 5555
          }
        ]
      }
    ]
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
    photos: [
      {
        before: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png',
        progress: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png',
        after: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'
      }
    ],
    docs: [
      {
        receipts: [
          {
            1: 'https://makereceipt.com/impImages/restaurantCreditDefault.jpg'
          },
          {
            2: 'https://i.pinimg.com/474x/89/7b/96/897b96d3dae8f52beb36d1f58193343b.jpg'
          }
        ],
        manuals: [
          {
            1: 'Installing new faucet'
          }
        ],
        contractor: [
          {
            name: 'Katy Chadwell'
          },
          {
            phone: 555 - 555 - 5555
          }
        ]
      }
    ]
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
