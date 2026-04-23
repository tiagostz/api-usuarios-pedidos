const Order = require('../models/Order');

exports.createOrder = async (data) => {
    return await Order.create(data);
};

exports.listOrders = async () => {
    return await Order.find().select('usuarioId descricao');
};

exports.listOrdersByUser = async (id) => {
    return await Order.find({ usuarioId: id })
        .select('usuarioId descricao');
};