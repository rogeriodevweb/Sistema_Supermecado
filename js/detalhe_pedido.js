document.addEventListener("DOMContentLoaded", function () {

    const parametros = new URLSearchParams(window.location.search);

    const idPedido = parametros.get("id");

    const numeroPedido = document.getElementById("numeroPedido");

    if (idPedido) {
        numeroPedido.textContent = "Pedido #" + idPedido;
    }


    // BOTÃO VOLTAR
    const botaoVoltar = document.getElementById("botaoVoltar");

    if (botaoVoltar) {

        botaoVoltar.addEventListener("click", function () {

            window.location.href = "../index.html";

        });

    }

});