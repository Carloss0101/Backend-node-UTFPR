const connection = require('../database/connection');

class Carros {

    listar(callback) {
        const query = 'SELECT * FROM carros';
        connection.query(query, callback);
    }

    listarById(id, callback) {
        const query = 'SELECT * FROM carros WHERE id = ?'

        connection.query(query, [id], callback)
    }

    inserir(dados, callback) {
        const { nome, marca, ano, preco, placa } = dados
        const query = 'INSERT INTO carros (nome, marca, ano, preco, placa) VALUE (?,?,?,?,?)';

        connection.query(query, [nome, marca, ano, preco, placa], callback);
    }

    atualizar(dados, id, callback) {
        const { nome, marca, ano, preco, placa } = dados
        const query = 'UPDATE carros SET nome = ?, marca = ?, ano = ?, preco = ?, placa = ? WHERE id = ?';

        connection.query(query, [nome, marca, ano, preco, placa, id], callback);
    }

    remover(id, callback) {
        const query = 'DELETE FROM carros WHERE id = ?';
        connection.query(query, [id], callback);
    }
}

module.exports = Carros