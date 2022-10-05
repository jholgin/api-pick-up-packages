const express = require('express')
const getOrders = require('../controller/order/getOrders')
const createOrder = require('../controller/order/createOrder')
const updateOrder = require('../controller/order/updateOrder')
const db = require('../config/db');


// Router
const router = express.Router();

// Obtener todas las ordenes
router.get("/orders/",getOrders.getOrders);

router.post("/orders/create",createOrder.createOrder);

router.patch("/orders/edit/:orderId", updateOrder.updateOrder);

module.exports = router
