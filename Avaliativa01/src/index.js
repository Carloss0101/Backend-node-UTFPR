const express = require('express');
const app = express();
const sequelize = require('./config/db');

const pessoasRouter = require('./routers/pessoas')

sequelize.sync().then(() => {
    console.log("Banco conectado com sucesso.")
}).catch((err) => console.log("Erro no banco de dados: ", err))

app.use(express.json());

app.use("/pessoas", pessoasRouter);

app.listen('8080', () => {
    console.log("Servidor Online. http://localhost:8080")
})