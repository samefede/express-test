const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cursoRoutes = require('./src/routers/curso');

// settings
const app = express();
const PUERTO = process.env.PORT || 3000;

//middleware
app.use('/api', cursoRoutes);

app.use(express.json());

// routers
app.get('/', (req, res) => {
  res.send("Welcome to my API");
});

//routing
app.get('/', (req, res) => {
  res.send('Mi primer servidor. Cursos');
});

mongoose
  .connect("mongodb+srv://ffarina:avatar123@cluster0.fqcav6y.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MONGODB Atlas"))
  .catch((error) => console.error(error));

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});