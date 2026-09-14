const loginClienteModel = require("../model/login_cliente_model");

const loginClienteController = {

    login: (req, res) => {

        const { email, senha } = req.body;

        // Verificar se os campos foram preenchidos
        if (!email || !senha) {

            return res.status(400).json({
                sucesso: false,
                mensagem: "E-mail e senha são obrigatórios."
            });
        }

        loginClienteModel.buscarCliente(email, (erro, clientes) => {

            if (erro) {

                console.error("Erro ao realizar login:", erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro interno do servidor."
                });
            }

            // Cliente não encontrado
            if (clientes.length === 0) {

                return res.status(401).json({
                    sucesso: false,
                    mensagem: "E-mail ou senha incorretos."
                });
            }

            const cliente = clientes[0];

            // Verificar senha
            if (cliente.senha !== senha) {

                return res.status(401).json({
                    sucesso: false,
                    mensagem: "E-mail ou senha incorretos."
                });
            }

            // Login realizado
            res.status(200).json({
                sucesso: true,
                mensagem: "Login realizado com sucesso.",
                cliente: {
                    id: cliente.id,
                    nome: cliente.nome,
                    email: cliente.email
                }
            });
        });
    }

};

module.exports = loginClienteController;