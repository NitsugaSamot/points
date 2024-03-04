const mongoose = require("mongoose");
const Material = require('../models/material.model')

const recyclingcenterSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ubicacion: String,
  horario_atencion: String,
  materials: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material"
    },
    nombrematerial: String
  }],
  imagen: {
    type: String,
  },
  latLng: {
      type: {
          lat: {
              type: String,
              required: true
          },
          lng: {
              type: String,
              required: true
          }
      },
      required: true
  },
});


const RecyclingCenter = mongoose.model("RecyclingCenter", recyclingcenterSchema);

module.exports = RecyclingCenter;


// const mongoose = require("mongoose");
// const Material = require('../models/material.model')

// //muchos a muchos entre model material y punto de reciclaje
// const recyclingcenterSchema = new mongoose.Schema({
//   nombre: {
//     type: String,
//     required: true,
//   },
//   ubicacion: String,
//   horario_atencion: String,
//   materials: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Material"
//   }]
//   ,
//   imagen: {
//     type: String,
//   },
//   latLng: {
//       type: {
//           lat: {
//               type: String,
//               required: true
//           },
//           lng: {
//               type: String,
//               required: true
//           }
//       },
//       required: true
//   },
// });

// const RecyclingCenter = mongoose.model("RecyclingCenter", recyclingcenterSchema);

// module.exports = RecyclingCenter;
