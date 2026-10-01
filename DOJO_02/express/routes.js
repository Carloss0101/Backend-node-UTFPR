const express = require('express');

const operacoes = require("./operacoes")
const router = express.Router()


router.get("/adicao", (req, res) => {
    res.send(operacoes.getAdicao());
})

router.post("/adicao", (req, res) => {
    res.send(operacoes.postAdicao(req.body.num1, req.body.num2));
})

router.get("/subtracao", (req, res) => {
    res.send(operacoes.getSubtracao());
})

router.post("/subtracao", (req, res) => {
    res.send(operacoes.postSubtracao(req.body.num1, req.body.num2));
})

router.get("/multiplicacao", (req, res) => {
    res.send(operacoes.getMultiplicacao());
})

router.post("/multiplicacao", (req, res) => {
    res.send(operacoes.postMultiplicacao(req.body.num1, req.body.num2));
})

router.get("/divisao", (req, res) => {
    res.send(operacoes.getDivisao());
})

router.post("/divisao", (req, res) => {
    res.send(operacoes.postDivisao(req.body.num1, req.body.num2));
})

module.exports = router
