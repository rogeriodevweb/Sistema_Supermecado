/* =========================================
   LOGIN DO CLIENTE
========================================= */

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mostrarSenha = document.getElementById("mostrarSenha");
const mensagem = document.getElementById("mensagem");
const botaoLogin = document.querySelector(".btn-login");


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
   LOGIN
========================================= */

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    mensagem.textContent = "";
    mensagem.className = "mensagem";


    /* -----------------------------------------
       VALIDAÇÃO
    ----------------------------------------- */

    if (!email || !senha) {

        mensagem.textContent =
            "Preencha o e-mail e a senha.";

        mensagem.classList.add("erro");

        return;
    }


    /* -----------------------------------------
       DESABILITAR BOTÃO
    ----------------------------------------- */

    botaoLogin.disabled = true;

    botaoLogin.textContent = "Entrando...";


    try {

        const resposta = await fetch("/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                senha: senha
            })

        });


        const dados = await resposta.json();


        /* -----------------------------------------
           ERRO
        ----------------------------------------- */

        if (!resposta.ok) {

            mensagem.textContent =
                dados.mensagem || "E-mail ou senha incorretos.";

            mensagem.classList.add("erro");

            return;
        }


        /* -----------------------------------------
           LOGIN REALIZADO
        ----------------------------------------- */

        mensagem.textContent =
            "Login realizado com sucesso!";

        mensagem.classList.add("sucesso");


        // Salvar informações básicas do cliente
        localStorage.setItem(
            "cliente",
            JSON.stringify(dados.cliente)
        );


        /* -----------------------------------------
           REDIRECIONAR
        ----------------------------------------- */

        setTimeout(() => {

            window.location.href = "index.html";

        }, 1000);


    } catch (erro) {

        console.error("Erro:", erro);

        mensagem.textContent =
            "Não foi possível conectar ao servidor.";

        mensagem.classList.add("erro");

    } finally {

        botaoLogin.disabled = false;

        botaoLogin.textContent = "Entrar";
    }

});