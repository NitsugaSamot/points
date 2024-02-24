const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    nombreCategoria: {
      type: String,
      required: true,
      unique: true
    },
    material: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material"
    }]
  });
  
const Categoria = mongoose.model("Categoria", categorySchema);

module.exports = Categoria;
