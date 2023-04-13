const express = require('express');
const cursoSchema = require("../datos/cursos");

//const {programacion} = require('../datos/cursos.js').infoCursos;

const router = express.Router();

router.use(express.json());

router.post('/cursos', (req, res) => {
  const curso = cursoSchema(req.body);
  curso
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
})

/*router.get('/', (req, res) => {
  const curso = cursoSchema(req.body);
    res.send(JSON.stringify(programacion));
  });
  
  router.get('/:lenguaje',  (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
  
    if(resultados.length === 0){
      return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje}`);
    }
    if(req.query.ordenar === 'vistas'){
      return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
  
    res.send(JSON.stringify(resultados));
  });
  
  router.get('/:lenguaje/:nivel',  (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
  
    if(resultados.length === 0){
      return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
  
    
  
    res.send(JSON.stringify(resultados));
});*/



/*router.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(programacion));
})

router.patch('/:id', (req, res) => {
    const infoNueva = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoNueva);
    }

    res.send(JSON.stringify(programacion));
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    
    if(indice >= 0){
        programacion.splice(indice, 1);
    }

    res.send(JSON.stringify(programacion));

})*/

module.exports = router;