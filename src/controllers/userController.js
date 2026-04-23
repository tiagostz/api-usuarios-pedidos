const userService = require('../services/userService');

exports.create = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.list = async (req, res) => {
    try {
        const users = await userService.listActiveUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.listInactive = async (req, res) => {
    try {
        const users = await userService.listInactiveUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userService.updateUser(id, req.body);

        res.json(user);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.params;

        await userService.inactivateUser(id);

        res.json({ message: 'Usuário desativado' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};