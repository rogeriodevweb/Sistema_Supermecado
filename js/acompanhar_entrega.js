/* =========================================================
   ACOMPANHAR ENTREGA
========================================================= */


/* =========================================================
   DADOS DE EXEMPLO
   Depois podemos substituir pela API
========================================================= */

const pedidos = {

    "CAT-2026-001": {

        numero: "CAT-2026-001",

        status: "Em transporte",

        previsao: "22/09/2026",

        atualizacao: "Atualizado hoje às 10:15",

        transportadora: "CA Tech Express",

        rastreio: "CATX938472BR",

        tipoEnvio: "Entrega padrão",

        destinatario: "Rogério Silva",

        endereco: "Rua Exemplo, 123",

        bairro: "Centro",

        cidade: "Araguaína - TO",

        cep: "77800-000",

        produto: "Cabo de Rede CAT6",

        quantidade: 1

    }

};


/* =========================================================
   CONSULTAR PEDIDO
========================================================= */

function consultarPedido() {

    const input = document.getElementById("codigoPedido");

    const mensagem = document.getElementById("mensagemBusca");

    const codigo = input.value.trim().toUpperCase();


    mensagem.textContent = "";


    if (codigo === "") {

        mensagem.textContent =
            "Digite o código do pedido.";

        return;
    }


    const pedido = pedidos[codigo];


    if (!pedido) {

        mensagem.textContent =
            "Pedido não encontrado. Verifique o código informado.";

        return;
    }


    carregarPedido(pedido);

}


/* =========================================================
   CARREGAR PEDIDO
========================================================= */

function carregarPedido(pedido) {

    document.getElementById("numeroPedido").textContent =
        pedido.numero;


    document.getElementById("statusPedido").textContent =
        pedido.status;


    document.getElementById("previsaoEntrega").textContent =
        pedido.previsao;


    document.getElementById("ultimaAtualizacao").textContent =
        pedido.atualizacao;


    document.getElementById("transportadora").textContent =
        pedido.transportadora;


    document.getElementById("codigoRastreio").textContent =
        pedido.rastreio;


    document.getElementById("tipoEnvio").textContent =
        pedido.tipoEnvio;


    document.getElementById("nomeDestinatario").textContent =
        pedido.destinatario;


    document.getElementById("enderecoRua").textContent =
        pedido.endereco;


    document.getElementById("enderecoBairro").textContent =
        pedido.bairro;


    document.getElementById("enderecoCidade").textContent =
        pedido.cidade;


    document.getElementById("enderecoCep").textContent =
        "CEP: " + pedido.cep;


    document.getElementById("nomeProduto").textContent =
        pedido.produto;


    document.getElementById("quantidadeProduto").textContent =
        "Quantidade: " + pedido.quantidade;


    atualizarStatus(pedido.status);

}


/* =========================================================
   ATUALIZAR STATUS
========================================================= */

function atualizarStatus(status) {

    const elemento =
        document.getElementById("statusPedido");


    elemento.className = "status";


    if (status === "Entregue") {

        elemento.classList.add("finalizado");

    }

    else if (status === "Cancelado") {

        elemento.classList.add("cancelado");

    }

    else {

        elemento.classList.add("entregue");

    }

}


/* =========================================================
   ENTER NO CAMPO DE BUSCA
========================================================= */

document
    .getElementById("codigoPedido")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            consultarPedido();

        }

    });


/* =========================================================
   VOLTAR
========================================================= */

function voltarPagina() {

    if (document.referrer) {

        history.back();

    } else {

        window.location.href = "index.html";

    }

}

