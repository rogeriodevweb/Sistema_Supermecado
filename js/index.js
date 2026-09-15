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


    /* =========================================
       BOTÃO USUÁRIO
    ========================================= */

    const botaoUsuario = document.getElementById("botaoUsuario");

    if (botaoUsuario) {

        botaoUsuario.addEventListener("click", function () {

            window.location.href = "../pages/login_cliente.html";

        });

    }

});