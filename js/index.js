
/* =========================================
   PEDIDOS - JAVASCRIPT
========================================= */


/* =========================================
   VER DETALHES DO PEDIDO
========================================= */

function mostrarPedido(numero) {

    alert("Abrindo detalhes do pedido #" + numero);

}


/* =========================================
   ATUALIZAÇÃO AUTOMÁTICA DO STATUS
========================================= */

function atualizarStatus() {

    console.log("Verificando atualizações dos pedidos...");

}


/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Sistema de pedidos carregado.");

    atualizarStatus();

});

