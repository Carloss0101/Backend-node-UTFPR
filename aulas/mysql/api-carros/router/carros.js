const express = require('express');

const router = express.Router();

const Carros = require('../models/Carro')
const carro = new Carros();

router.get('/', (req, res) => {
  carro.listar((erro, resultados) => {
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

    if(!id || isNaN(id)) {
        return res.status(400).json({
            err: "Id inválido"
        });
    }

    carro.listarById(id, (err, resultado) => {
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

    carro.inserir({nome, marca, ano, preco, placa}, (err, resultado) => {
        console.log(err)
        if (err) return res.status(500).json({
            err: "Ocorreu um erro ao inserir no banco."
        })

        res.status(201).json({mensagem: "Item inserido no banco de dados.", id: resultado.insertId});
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    if(!id) {
        return res.status(400).json({
            err: "Id Inválido."
        })
    }

    const {nome, marca, ano, preco, placa} = req.body;
    if(!nome || !marca || !ano || !preco || !placa) {
        return res.status(400).json({
            err: "Campos inválidos."
        });
    }

    carro.atualizar({nome, marca, ano, preco, placa}, id, (erro, resultado) => {
        if(erro) {
            return res.status(400).json({
                err: "Erro ao atualizar carro."
            })
        }

        if(resultado.affectedRows == 0) {
            return res.status(404).json({
                err: "Carro não localizado."
            })
        }

        res.json({
            mensagem: "Mensagem editada com sucesso."
        })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    if(!id) return res.status(400).json({
        err: "Id inválido."
    })

    carro.remover(id, (err, resultado) => {
        if(err) return res.status(500).json({
            err: "Erro ao deletar carro"
        })

        if(resultado.affectedRows === 0) return res.status(404).json({
            err: "Carro não localizado."
        });

        res.json({
            mensagem: "Carro deletado com sucesso."
        })
    })
})

module.exports = router;