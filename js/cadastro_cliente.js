/* =========================================
   CADASTRO DO CLIENTE
========================================= */

const cadastroForm = document.getElementById("cadastroForm");

const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const confirmarSenhaInput = document.getElementById("confirmarSenha");

const mostrarSenha = document.getElementById("mostrarSenha");
const mostrarConfirmarSenha = document.getElementById("mostrarConfirmarSenha");

const mensagem = document.getElementById("mensagem");

const botaoCadastrar = document.querySelector(".btn-cadastrar");


/* =========================================
   MOSTRAR / OCULTAR SENHA
========================================= */

mostrarSenha.addEventListener("click", () => {

    if (senhaInput.type === "password") {

        senhaInput.type = "text";

        mostrarSenha.textContent = "🙈";

    } else {

        senhaInput.type = "password";

        mostrarSenha.textContent = "👁";
    }

});


/* =========================================
   MOSTRAR / OCULTAR CONFIRMAÇÃO
========================================= */

mostrarConfirmarSenha.addEventListener("click", () => {

    if (confirmarSenhaInput.type === "password") {

        confirmarSenhaInput.type = "text";

        mostrarConfirmarSenha.textContent = "🙈";

    } else {

        confirmarSenhaInput.type = "password";

        mostrarConfirmarSenha.textContent = "👁";
    }

});


/* =========================================
   CADASTRO
========================================= */

cadastroForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;


    mensagem.textContent = "";
    mensagem.className = "mensagem";


    /* =====================================
       VALIDAR NOME
    ===================================== */

    if (!nome) {

        mensagem.textContent =
            "Digite seu nome completo.";

        mensagem.classList.add("erro");

        return;
    }


    /* =====================================
       VALIDAR E-MAIL
    ===================================== */

    if (!email) {

        mensagem.textContent =
            "Digite seu e-mail.";

        mensagem.classList.add("erro");

        return;
    }


    /* =====================================
       VALIDAR SENHA
    ===================================== */

    if (senha.length < 6) {

        mensagem.textContent =
            "A senha deve possuir pelo menos 6 caracteres.";

        mensagem.classList.add("erro");

        return;
    }


    /* =====================================
       CONFIRMAR SENHA
    ===================================== */

    if (senha !== confirmarSenha) {

        mensagem.textContent =
            "As senhas não são iguais.";

        mensagem.classList.add("erro");

        return;
    }


    /* =====================================
       DESABILITAR BOTÃO
    ===================================== */

    botaoCadastrar.disabled = true;

    botaoCadastrar.textContent = "Salvando...";


    try {

        /* =================================
           ENVIAR PARA O BACKEND
        ================================= */

        const resposta = await fetch("/cadastro", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha
            })

        });


        const dados = await resposta.json();


        /* =================================
           ERRO
        ================================= */

        if (!resposta.ok) {

            mensagem.textContent =
                dados.mensagem ||
                "Não foi possível realizar o cadastro.";

            mensagem.classList.add("erro");

            return;
        }


        /* =================================
           SUCESSO
        ================================= */

        mensagem.textContent =
            "Cadastro realizado com sucesso!";

        mensagem.classList.add("sucesso");


        cadastroForm.reset();


        /* =================================
           IR PARA LOGIN
        ================================= */

        setTimeout(() => {

            window.location.href = "login_cliente.html";

        }, 1200);


    } catch (erro) {

        console.error("Erro:", erro);

        mensagem.textContent =
            "Não foi possível conectar ao servidor.";

        mensagem.classList.add("erro");

    } finally {

        botaoCadastrar.disabled = false;

        botaoCadastrar.textContent = "Salvar cadastro";
    }

});