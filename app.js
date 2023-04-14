const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cursoRoutes = require('./src/routers/curso');
const path = require("path");

//swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: [`${path.join(__dirname, "./src/routers/*.js")}`]
}

// settings
const app = express();
const PUERTO = process.env.PORT || 3000;

//middleware
app.use('/api', cursoRoutes);
app.use(express.json());
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

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