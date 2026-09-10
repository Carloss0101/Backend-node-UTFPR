const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];

//Manipulação Básica 1.0
const clientesAprovados = pedidos.filter((e) => e.status === "aprovado");

console.log("-- Clientes Aprovados --");
console.log(clientesAprovados);

//Manipulação Básica 2.0
const nomesClientesAprovados = clientesAprovados.map((e) => {return {nome: e.cliente}});

console.log("-- Clientes Aprovados Apenas nomes --");
console.log(nomesClientesAprovados);

//Agregação de Dados 1.0
const totalVendasAprovados = clientesAprovados.reduce((ac, vl) => ac + vl.total, 0);

console.log("-- Total vendas clientes aprovados --");
console.log(totalVendasAprovados);


//Agregação de Dados 2.0
const mediaVendasAprovados = totalVendasAprovados / clientesAprovados.length

console.log("-- Média vendas clientes aprovados --");
console.log(mediaVendasAprovados.toFixed(2));

//Hash Table 1.0
const clientesAgrupadosPorPedido = pedidos.reduce((ac, vl) => {
    const cliente = vl.cliente;

    if(!ac[cliente]) {
      ac[cliente] = [];
    }

    ac[cliente].push(vl);

    return ac;
  }, {});

console.log("-- Clientes agrupados por pedidos --");
console.log(clientesAgrupadosPorPedido);

//Classe (Modelagem)
class Pedido {
  constructor(id, cliente, total, status) {
    this.id = id;
    this.cliente = cliente;
    this.total = total;
    this.status = status;
  }

  isAprovado() {
    return this.status === 'Aprovado';
  }
}

const pedidiosClasse =  pedidos.map((e) => {
  return new Pedido(e.id, e.cliente, e.total, e.status);
})

console.log(pedidiosClasse)

const calcularTotalCliente = (pedidos, nomeCliente) => {
  if(!pedidos || pedidos?.length === 0 || !nomeCliente  || nomeCliente?.length === 0) {
    return null;
  }

  return pedidos.reduce((ac, vl) => {
    return vl.cliente == nomeCliente ? ac + vl.total : ac
  }, 0);
}

console.log(calcularTotalCliente(pedidos, "Ana"))
console.log(calcularTotalCliente(pedidos, ""))


//Desafio com map + filter + reduce
const calcularTotaluserAprovados =  () => {
  const clientesUnicos = new Map();

  clientesAprovados.forEach((e) => {
    if(!clientesUnicos.has(e.cliente)) {
      clientesUnicos.set(e.cliente, e.cliente)
    }
  })

 const res = [];
 
 clientesUnicos.forEach((nome) => {
  res.push({
    nome: nome,
    total: calcularTotalCliente(clientesAprovados, nome)
  })
 })

 return res;
}

console.log(calcularTotaluserAprovados());
