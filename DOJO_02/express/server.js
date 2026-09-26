//dados enviados via url e não por body

const express = require('express');
const operacoes = require('./operacoes')

const app = express();

app.use(express.json())

app.get("/adicao", (req, res) => {
    res.send(operacoes.getAdicao());
})

app.post("/adicao", (req, res) => {
    res.send(operacoes.postAdicao(req.body.num1, req.body.num2));
})

app.get("/subtracao", (req, res) => {
    res.send(operacoes.getSubtracao());
})

app.post("/subtracao", (req, res) => {
    res.send(operacoes.postSubtracao(req.body.num1, req.body.num2));
})

app.get("/multiplicacao", (req, res) => {
    res.send(operacoes.getMultiplicacao());
})

app.post("/multiplicacao", (req, res) => {
    res.send(operacoes.postMultiplicacao(req.body.num1, req.body.num2));
})

app.get("/divisao", (req, res) => {
    res.send(operacoes.getDivisao());
})

app.post("/divisao", (req, res) => {
    res.send(operacoes.postDivisao(req.body.num1, req.body.num2));
})

app.listen("9090", () => {
    console.log("Servidor online!");
})