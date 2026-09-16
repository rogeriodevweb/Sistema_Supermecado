/* =========================================
   ELEMENTOS
========================================= */

const botaoUsuario = document.getElementById("botaoUsuario");
const barraLateral = document.getElementById("barraLateral");
const fecharMenu = document.getElementById("fecharMenu");

const botaoInicio = document.getElementById("botaoInicio");
const botaoEndereco = document.getElementById("botaoEndereco");
const botaoPerfil = document.getElementById("botaoPerfil");

const voltartelaInicio = document.getElementById("voltartelaInicio");
const detalhesPedido = document.getElementById("detalhesPedido");

const formPerfilCentral =
    document.getElementById("formPerfilCentral");

const formEndereco =
    document.getElementById("formEndereco");


/* =========================================
   TELAS CENTRAIS
========================================= */

const telaInicio =
    document.getElementById("telaInicio");

const telaPerfil =
    document.getElementById("telaPerfil");

const telaDetalhes =
    document.getElementById("telaDetalhes");

const telaEndereco =
    document.getElementById("telaEndereco");


/* =========================================
   MOSTRAR TELA CENTRAL
========================================= */

function mostrarTela(tela) {

    /* =====================================
       ESCONDER TODAS AS TELAS
    ===================================== */

    if (telaInicio) {
        telaInicio.style.display = "none";
    }

    if (telaPerfil) {
        telaPerfil.style.display = "none";
    }

    if (telaDetalhes) {
        telaDetalhes.style.display = "none";
    }

    if (telaEndereco) {
        telaEndereco.style.display = "none";
    }


    /* =====================================
       REMOVER DESTAQUE DOS BOTÕES
    ===================================== */

    if (botaoInicio) {
        botaoInicio.classList.remove("ativo");
    }

    if (botaoEndereco) {
        botaoEndereco.classList.remove("ativo");
    }

    if (botaoPerfil) {
        botaoPerfil.classList.remove("ativo");
    }


    /* =====================================
       INÍCIO / MINHAS COMPRAS
    ===================================== */

    if (tela === "inicio") {

        if (telaInicio) {
            telaInicio.style.display = "block";
        }

        if (botaoInicio) {
            botaoInicio.classList.add("ativo");
        }

    }


    /* =====================================
       PERFIL
    ===================================== */

    if (tela === "perfil") {

        if (telaPerfil) {
            telaPerfil.style.display = "block";
        }

        if (botaoPerfil) {
            botaoPerfil.classList.add("ativo");
        }

    }


    /* =====================================
       ENDEREÇO
    ===================================== */

    if (tela === "endereco") {

        if (telaEndereco) {
            telaEndereco.style.display = "block";
        }

        if (botaoEndereco) {
            botaoEndereco.classList.add("ativo");
        }

    }


    /* =====================================
       DETALHES DO PEDIDO
    ===================================== */

    if (tela === "detalhes") {

        if (telaDetalhes) {
            telaDetalhes.style.display = "block";
        }

    }

}


/* =========================================
   BARRA LATERAL
========================================= */

/*
   A barra lateral serve somente para
   navegação.

   Perfil e Endereço aparecem na
   parte central da página.
*/


/* =========================================
   BOTÃO FECHAR MENU
========================================= */

if (fecharMenu) {

    fecharMenu.addEventListener("click", () => {

        if (barraLateral) {

            barraLateral.classList.remove("aberta");

        }

    });

}


/* =========================================
   BOTÃO USUÁRIO
========================================= */

if (botaoUsuario) {

    botaoUsuario.addEventListener("click", () => {

        if (barraLateral) {

            barraLateral.classList.add("aberta");

        }

        mostrarTela("inicio");

    });

}


/* =========================================
   BOTÃO INÍCIO / MINHAS COMPRAS
========================================= */

if (botaoInicio) {

    botaoInicio.addEventListener("click", () => {

        mostrarTela("inicio");

    });

}


/* =========================================
   BOTÃO MEU ENDEREÇO
========================================= */

if (botaoEndereco) {

    botaoEndereco.addEventListener("click", () => {

        /*
           Mostra SOMENTE o formulário
           de endereço no centro.
        */

        mostrarTela("endereco");

    });

}


/* =========================================
   BOTÃO MEU PERFIL
========================================= */

if (botaoPerfil) {

    botaoPerfil.addEventListener("click", () => {

        /*
           Mostra SOMENTE o formulário
           de perfil no centro.
        */

        mostrarTela("perfil");

    });

}


/* =========================================
   DADOS DOS PEDIDOS
========================================= */

const pedidos = {

    "001": {

        numero: "001",

        data: "15/09/2026",

        total: "125,90",

        status: "Concluída",

        pagamento: "Cartão de crédito",

        endereco: "Endereço cadastrado",

        produtos: [

            {
                nome: "Arroz 5kg",
                quantidade: 1,
                preco: "25,90"
            },

            {
                nome: "Feijão 1kg",
                quantidade: 2,
                preco: "8,00"
            },

            {
                nome: "Produtos diversos",
                quantidade: 1,
                preco: "84,00"
            }

        ]

    },


    "002": {

        numero: "002",

        data: "10/09/2026",

        total: "87,50",

        status: "Concluída",

        pagamento: "Pix",

        endereco: "Endereço cadastrado",

        produtos: [

            {
                nome: "Produtos diversos",
                quantidade: 1,
                preco: "87,50"
            }

        ]

    }

};


/* =========================================
   ABRIR DETALHES DO PEDIDO
========================================= */

function abrirDetalhes(numeroPedido) {

    const pedido = pedidos[numeroPedido];


    /* =====================================
       PEDIDO NÃO ENCONTRADO
    ===================================== */

    if (!pedido) {

        if (detalhesPedido) {

            detalhesPedido.innerHTML = `
                <p>Pedido não encontrado.</p>
            `;

        }

        mostrarTela("detalhes");

        return;

    }


    /* =====================================
       PRODUTOS
    ===================================== */

    let produtosHTML = "";


    pedido.produtos.forEach(produto => {

        produtosHTML += `

            <div class="item-produto">

                <strong>
                    ${produto.nome}
                </strong>

                <p>
                    Quantidade: ${produto.quantidade}
                </p>

                <p>
                    Preço: R$ ${produto.preco}
                </p>

            </div>

        `;

    });


    /* =====================================
       MONTAR DETALHES
    ===================================== */

    if (detalhesPedido) {

        detalhesPedido.innerHTML = `

            <h3>
                Compra #${pedido.numero}
            </h3>

            <p>
                <strong>Data:</strong>
                ${pedido.data}
            </p>

            <p>
                <strong>Status:</strong>
                ${pedido.status}
            </p>

            <p>
                <strong>Pagamento:</strong>
                ${pedido.pagamento}
            </p>

            <p>
                <strong>Endereço:</strong>
                ${pedido.endereco}
            </p>

            <h3>
                Produtos comprados
            </h3>

            ${produtosHTML}

            <div class="total-pedido">

                Total: R$ ${pedido.total}

            </div>

        `;

    }


    /* =====================================
       MOSTRAR TELA DE DETALHES
    ===================================== */

    mostrarTela("detalhes");

}


/* =========================================
   CLIQUE NAS COMPRAS
========================================= */

const compras =
    document.querySelectorAll(".compra");


compras.forEach(compra => {

    compra.addEventListener("click", () => {

        const numeroPedido =
            compra.dataset.pedido;

        abrirDetalhes(numeroPedido);

    });

});


/* =========================================
   CLIQUE NOS PEDIDOS DO CENTRO
========================================= */

const pedidosCentrais =
    document.querySelectorAll(".pedido-central");


pedidosCentrais.forEach(pedido => {

    pedido.addEventListener("click", () => {

        const numeroPedido =
            pedido.dataset.pedido;

        abrirDetalhes(numeroPedido);

    });

});


/* =========================================
   VOLTAR PARA MINHAS COMPRAS
========================================= */

if (voltartelaInicio) {

    voltartelaInicio.addEventListener("click", () => {

        mostrarTela("inicio");

    });

}


/* =========================================
   SALVAR PERFIL
========================================= */

if (formPerfilCentral) {

    formPerfilCentral.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            const nome =
                document
                    .getElementById("nomeClienteCentral")
                    ?.value
                    .trim();


            const email =
                document
                    .getElementById("emailClienteCentral")
                    ?.value
                    .trim();


            const telefone =
                document
                    .getElementById("telefoneClienteCentral")
                    ?.value
                    .trim();


            const senha =
                document
                    .getElementById("senhaClienteCentral")
                    ?.value
                    .trim();


            /* =================================
               CAMPOS OBRIGATÓRIOS
            ================================= */

            if (!nome || !email || !telefone) {

                alert(
                    "Preencha todos os campos obrigatórios."
                );

                return;

            }


            /* =================================
               DADOS DO PERFIL
            ================================= */

            console.log(
                "Dados do perfil:",
                {
                    nome,
                    email,
                    telefone,
                    senha
                }
            );


            alert(
                "Perfil atualizado com sucesso!"
            );

        }
    );

}


/* =========================================
   SALVAR ENDEREÇO
========================================= */

if (formEndereco) {

    formEndereco.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            const cep =
                document
                    .getElementById("cepCliente")
                    ?.value
                    .trim();


            const rua =
                document
                    .getElementById("ruaCliente")
                    ?.value
                    .trim();


            const numero =
                document
                    .getElementById("numeroCliente")
                    ?.value
                    .trim();


            const complemento =
                document
                    .getElementById("complementoCliente")
                    ?.value
                    .trim();


            const bairro =
                document
                    .getElementById("bairroCliente")
                    ?.value
                    .trim();


            const cidade =
                document
                    .getElementById("cidadeCliente")
                    ?.value
                    .trim();


            const estado =
                document
                    .getElementById("estadoCliente")
                    ?.value
                    .trim();


            /* =================================
               CAMPOS OBRIGATÓRIOS
            ================================= */

            if (
                !cep ||
                !rua ||
                !numero ||
                !bairro ||
                !cidade ||
                !estado
            ) {

                alert(
                    "Preencha todos os campos obrigatórios do endereço."
                );

                return;

            }


            /* =================================
               DADOS DO ENDEREÇO
            ================================= */

            const endereco = {

                cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado

            };


            console.log(
                "Endereço atualizado:",
                endereco
            );


            alert(
                "Endereço atualizado com sucesso!"
            );

        }
    );

}


/* =========================================
   TELA INICIAL
========================================= */

mostrarTela("inicio");

