const mongoose = require("mongoose");

const cursoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    lenguaje: {
        type: String,
        required: true
    },
    vistas: {
        type: Number,
        required: true
    },
    nivel: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Curso', cursoSchema);

