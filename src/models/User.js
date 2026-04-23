const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    cpf: { type: String, required: true },
    rg: String,
    nome: String,
    idade: Number,
    email: String,
    login: String,
    senha: String,
    ativo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('User', UserSchema);