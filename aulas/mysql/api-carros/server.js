const express = require("express");
const routersCarros = require("./router/carros")

const app = express();

app.use(express.json())
app.use("/carros", routersCarros);


app.listen(8080, () => {
    console.log("🟢 Servidor Online! http://localhost:8080")
})