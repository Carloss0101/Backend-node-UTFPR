const http = require("http");
const operacoes = require("./operacoes");

const port = 3000;

const server = http.createServer((req, res) => {
    
    //Rotas de adição
    if(req.url === "/adicao") {
        if(req.method === "GET") {
            res.writeHead(200, {"Context-Type": "application/json"});
            res.end(JSON.stringify({
                status: 200,
                mensagem: operacoes.getAdicao()
            }))
        } 
        else if(req.method === "POST") {
            let body = "";

            req.on("data", (chuck) => {
                body += chuck;
            })

            req.on("end", () => {
                const dados = JSON.parse(body);
                res.writeHead(200, {"Context-Type": "application/json"});
                res.end(JSON.stringify({
                    status: 200,
                    mensagem: operacoes.postAdicao(dados.numA, dados.numB)
                }))
            })
        }
    } 
    //Rotas Subtração
    else if (req.url === "/subtracao") {
        if(req.method === "GET") {
            res.writeHead(200, {"Context-Type":"application/json"})
            res.end(JSON.stringify({
                status: 200,
                mensagem: operacoes.getSubtracao()
            }))
        } else if (req.method === "POST") {
            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            })

            req.on("end", () => {
                const dados = JSON.parse(body);
                res.writeHead(200, {"Context-Type":"application/json"})
                res.end(JSON.stringify({
                    status: 200,
                    mensagem: operacoes.postSubtracao(dados.numA, dados.numB)
                }))
            })
        }
    }
    //Rotas de multiplicação
    else if(req.url === "/multiplicacao") {
        if(req.method === "GET") {
            res.writeHead(200, {"Context-Type":"application/json"})
            res.end(JSON.stringify({
                status: 200,
                mensagem: operacoes.getMultiplicacao()
            }))
        } else if(req.method === "POST") {
            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            })

            req.on("end", () => {
                const dados = JSON.parse(body);

                res.writeHead(200, {"Context-Type":"applicaton/json"})
                res.end(JSON.stringify({
                    status: 200,
                    mensagem: operacoes.postMultiplicacao(dados.numA, dados.numB)
                }))
            })
        }
    }
    //Rotas de divisao
    else if(req.url === "/divisao") {
        if(req.method === "GET") {
            res.writeHead(200, {"Context-Type":"applications/json"})
            res.end(JSON.stringify({
                status: 200,
                mensagem: operacoes.getDivisao()
            }))
        } else if(req.method === "POST") {
            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            })

            req.on("end", () => {
                const dados = JSON.parse(body);

                res.writeHead(200, {"Context-Type":"application/json"})
                res.end(JSON.stringify({
                    status: 200,
                    mensagem: operacoes.postDivisao(dados.numA, dados.numB)
                }))
            })
        }
    }
    else {
        res.writeHead(404, {"Context-Text":"application/json" });
        res.end(JSON.stringify({
            erro: "Rota não encontrada!"
        }));
    }

})
server.listen(port, () => {
    console.log(`🟢 Servidor Online! http://localhost:${port}/`);
})