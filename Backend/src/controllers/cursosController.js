const Cursos = require("../models/cursos");

// Criar uma unico curso usando insertOne
exports.createCursos = async (req, res) => {
  try {
    const cursos = await Cursos.create(req.body);
    res.status(201).json(cursos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Criar vários Cursoss usando insertMany
exports.createManyCursos = async (req, res) => {
  try {
    const cursos = await Cursos.insertMany(req.body);
    res.status(201).json(cursos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar todas as Cursos usando find
exports.getAllCursos = async (req, res) => {
  try {
    const cursos = await Cursos.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar uma Cursos usando update
exports.updateCursos = async (req, res) => {
  try {
    const cursos = await Cursos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(cursos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar uma Cursos usando delete
exports.deleteCursos = async (req, res) => {
  try {
    await Cursos.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cursos deletado" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
