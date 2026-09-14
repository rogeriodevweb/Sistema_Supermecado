const express = require("express");

const router = express.Router();

const indexController = require("../controller/js/index");

router.get("/", indexController.inicio);

router.get(
    "/pedidos",
    indexController.listarPedidos
);

router.get(
    "/pedidos/entrega",
    indexController.listarPedidosEntrega
);

router.get(
    "/pedidos/:id",
    indexController.buscarPedido
);

module.exports = router;