const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'api_carros'
})

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco', err);
        return;
    }

    console.log("Banco de dados Conectado!")
})

module.exports = connection;