const mongoose = require('mongoose');

const DepartamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
}, { timestamps: true });

const DepartamentoModel = mongoose.model('Departamento', DepartamentoSchema);

module.exports = DepartamentoModel;