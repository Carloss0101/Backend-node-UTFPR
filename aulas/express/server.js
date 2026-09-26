const express = require('express');

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.json({
        usuario: req.body.nome,
        senha: req.body.senha
    })
})

app.listen("3000", () => {
    console.log("🟢 Servidor online: http://localhost:3000/")
})