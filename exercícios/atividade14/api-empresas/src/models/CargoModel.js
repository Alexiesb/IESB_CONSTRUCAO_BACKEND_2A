const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    salario: {
        type: Number,
        required: true,
        min: 1518, // Salário mínimo de R$ 1.518,00
    }
}, { timestamps: true });

module.exports = mongoose.model('Cargo', CargoSchema);