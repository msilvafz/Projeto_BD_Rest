const mongoose = require("mongoose");
const { curso } = require("./cursos");

const UserSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    tipo: {
      type: String,
      required: true,
      enum: ["Admin", "Aluno", "Professor"],
    },
    cursos: { type: [curso] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
