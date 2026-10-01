const express = require('express');
const app = express();

const routes = require("./routes");

app.use(express.json());

app.use(routes);

app.listen("9090", () => {
    console.log("Servidor online!");
})