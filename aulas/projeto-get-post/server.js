const http = require("http");

const port = 3000

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === "/") {
        res.writeHead(200, {"Context-Type": "application/json"});
        res.end(JSON.stringify({
            mensagem: "Hello world!"
        }));
    } else {
       res.writeHead(404, {"Context-Type": "application/json"});
        res.end(JSON.stringify({
            mensagem: "[ERRO] Rota não encontrado."
        })); 
    }
})


server.listen(port, () => {
    console.log("Servidor Online:  localhost:", port);
})