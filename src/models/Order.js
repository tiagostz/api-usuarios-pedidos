const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    descricao: String
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);