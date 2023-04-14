const express = require('express');
const cursoSchema = require("../datos/cursos");

const router = express.Router();
router.use(express.json());
// crea un curso
/**
 * @swagger
 * components:
 *  schemas:
 *    Curso:
 *      type: object
 *      properties:
 *        titulo:
 *          type: string
 *          description: Titulo del curso
 *        lenguaje:
 *          type: string
 *          description: Lenguaje que se aprenderá en el curso
 *        vistas:
 *          type: integer
 *          description: Vistas totales del curso
 *        nivel:
 *          type: string
 *          description: Nivel del curso
 *      required:
 *        - titulo
 *        - lenguaje
 *        - vistas
 *        - nivel
 *      example:
 *        titulo: Aprender C
 *        lenguaje: C
 *        vistas: 1000
 *        nivel: basico
 */

/**
 * @swagger
 * /api/cursos:
 *  post:
 *    summary: crea un nuevo curso
 *    tags: [Curso]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Curso'
 *    responses:
 *      200:
 *        description: curso creado
 *      400:
 *        descripcion:
 */
router.post('/cursos', (req, res) => {
  const curso = cursoSchema(req.body);
  curso
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
})

// trae todos los cursos
/**
 * @swagger
 * /api/cursos:
 *  get:
 *    summary: retorna todos los cursos
 *    tags: [Curso]
 *    responses:
 *      200:
 *        description: retorno de todos los cursos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Curso'
 *      400:
 *        descripcion:
 */
router.get("/cursos", (req, res) => {
  cursoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// trae un curso
/**
 * @swagger
 * /api/cursos/{id}:
 *  get:
 *    summary: retorna un curso
 *    tags: [Curso]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: id del curso
 *    responses:
 *      200:
 *        description: retorno de todos los cursos
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              
 *      400:
 *        descripcion: no se encontro el curso
 */
router.get("/cursos/:id", (req, res) => {
  const { id } = req.params;
  cursoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// elimina un curso
/**
 * @swagger
 * /api/cursos/{id}:
 *  delete:
 *    summary: elimina un curso
 *    tags: [Curso]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: id del curso
 *    responses:
 *      200:
 *        description: el curso se elimino
 *      400:
 *        descripcion: no se encontro el curso
 */
router.delete("/cursos/:id", (req, res) => {
  const { id } = req.params;
  cursoSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// modifica un curso
/**
 * @swagger
 * /api/cursos/{id}:
 *  put:
 *    summary: modifica un curso
 *    tags: [Curso]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: id del curso
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Curso'
 *    responses:
 *      200:
 *        description: el curso se modifico
 *      400:
 *        descripcion: no se encontro el curso
 */
router.put("/cursos/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, lenguaje, vistas, nivel } = req.body;
  cursoSchema
    .updateOne({ _id: id }, { $set: { titulo, lenguaje, vistas, nivel } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;