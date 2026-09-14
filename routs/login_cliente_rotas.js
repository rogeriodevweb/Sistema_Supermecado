const express = require("express");

const router = express.Router();

const loginClienteController = require("../controller/login_cliente_controller");

router.post(
    "/login",
    loginClienteController.login
);

module.exports = router;