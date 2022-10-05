const express = require('express');
const getOrders = require('../controller/getOrders');
const db = require('../config/db');
const getUsers = require('../controller/auth/getUsers');
const createUser = require('../controller/auth/createUser')
const loginUser = require('../controller/auth/loginUser')


// Router
const router = express.Router();

// Obtener todas las ordenes
router.get("/auth",getUsers.getUsers);

router.post("/auth/login",loginUser.loginUser);

router.post("/auth/register",createUser.createUser);

module.exports = router

