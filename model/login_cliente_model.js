const db = require("../config/database");

const loginClienteModel = {

    buscarCliente: (email, callback) => {

        const sql = `
            SELECT
                id,
                nome,
                email,
                senha
            FROM cliente
            WHERE email = ?
            LIMIT 1
        `;

        db.query(sql, [email], callback);
    }

};

module.exports = loginClienteModel;