const express = require('express');
const cursoSchema = require("../datos/cursos");

const router = express.Router();

router.use(express.json());

// crea un curso
router.post('/cursos', (req, res) => {
  const curso = cursoSchema(req.body);
  curso
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
})

// trae todos los cursos
router.get("/cursos", (req, res) => {
  cursoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// trae un curso
router.get("/cursos/:id", (req, res) => {
  const { id } = req.params;
  cursoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// elimina un curso
router.delete("/cursos/:id", (req, res) => {
  const { id } = req.params;
  cursoSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// modifica un curso
router.put("/cursos/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, lenguaje, vistas, nivel } = req.body;
  cursoSchema
    .updateOne({ _id: id }, { $set: { titulo, lenguaje, vistas, nivel } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;