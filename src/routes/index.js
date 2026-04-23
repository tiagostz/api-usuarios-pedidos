const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');

// usuários
router.post('/users', userController.create);
router.get('/users', userController.list);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);
router.get('/users/inactive', userController.listInactive);

// login
router.post('/auth/login', authController.login);

// pedidos
router.post('/orders', orderController.create);
router.get('/orders', orderController.list);
router.get('/orders/user/:id', orderController.listByUser);

module.exports = router;