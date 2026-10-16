const express = require('express');

const router = express.Router();

const connection = require('../database/connection');

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM carros';
  connection.query(sql, (erro, resultados) => {
    if (erro) {
      return res.status(500).json({
        erro: 'Erro ao buscar carros'
      });

    }
    res.json(resultados);
  });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM carros WHERE id = ?';

    connection.query(query, [id], (err, resultado) => {
        if(err) return res.status(500).json({
            err: "Erro ao executar consulta no banco."
        });

        if(!resultado.length) return res.status(404).json({
            err: "Carro não localizado."
        });

        res.json(resultado[0]);
    })

})

router.post('/', (req, res) => {
    const {nome, marca, ano, preco, placa} = req.body;

    if(!nome || !marca || !ano || !preco || !placa) {
        return res.status(400).json({
            error: "Campos inválidos."
        })
    }

    const query = "INSERT INTO carros (nome, marca, ano, preco, placa) VALUES (?,?,?,?,?)";

    connection.query(query, [nome, marca, ano, preco, placa], (err, resultado) => {
        console.log(err)
        if (err) return res.status(500).json({
            err: "Ocorreu um erro ao inserir no banco."
        })

        res.status(201).json({mensagem: "Item inserido no banco de dados.", id: resultado.insertId});
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    if(!id) return res.status(400).json({
        err: "Id inválido."
    })

    const query = "DELETE carros WHERE id = ?";

    connection.query(query, [id], (err, resultado) => {
        if(err) return res.status(500).json({
            err: "Erro ao deletar carro"
        })

        res.json({
            mensagem: "Carro deletado com sucesso."
        })
    })
})

module.exports = router;