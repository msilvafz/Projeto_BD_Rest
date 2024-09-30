const mongoose = require("mongoose");

const cursosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descrição: { type: String, required: true },
    preço: { type: Number, required: true },
    imagem: { type: String, required: true },
    video: { type: String, required: true },
    promoção: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cursos", cursosSchema);
