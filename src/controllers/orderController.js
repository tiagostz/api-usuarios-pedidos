const orderService = require('../services/orderService');

exports.create = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.list = async (req, res) => {
    try {
        const orders = await orderService.listOrders();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.listByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await orderService.listOrdersByUser(id);
        res.json(orders);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};