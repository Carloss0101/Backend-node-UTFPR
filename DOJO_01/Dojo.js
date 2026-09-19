const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

// Parte 01 -  Total de Compras por Usuário
const calcularTotalComprasUsuarios  = () => {
  const usuarioTotal = usuarios.map((e) => {
      return { nome: e.nome, total: e.compras.reduce((ac, vl) => ac + vl, 0)}
    })

    return usuarioTotal;
}

console.log("======== Parte 01 =========");
console.log(calcularTotalComprasUsuarios());

// Parte 02 - Usuários Ativos
const usuariosAtivos = () => {
  if(!usuarios || usuarios?.length == 0) return null;

  return usuarios?.filter((e) => e.ativo == true)
}

console.log("======== Parte 02 =========");
console.log(usuariosAtivos());

// Parte 03 - Usuários Maiores de Idade
const listUsuariosMaioresIdade = () => {

  return usuarios?.filter((e) => e.idade >= 18);
}

console.log("======== Parte 03 =========");
console.log(listUsuariosMaioresIdade());


// Parte 04 - Usuário com Maior Volume de Compras
const listUsuarioMaiorVolumeCompra = () => {
  const volumeComprasUsuarios = usuarios.map((e) => {
    return {nome: e.nome, totalCompras: e.compras.reduce((ac, vl) => ac + vl, 0)}
  })

  return volumeComprasUsuarios.reduce((ec, vl) => vl.totalCompras > ec.totalCompras ? vl : ec) 
  
}

console.log("======== Parte 04 ========");
console.log(listUsuarioMaiorVolumeCompra());

// Parte 05 - Desafio de Coerção de Tipos
console.log("5" + 2); //Aqui está acontecendo uma contatenação, pois string + ocorre a contatenação de valores e nao soma.
console.log("5" - 2); //O js identifica o - como uma operação matematica, assim ele tenta converter o 5 e faz a subtração.
console.log(true + 1); //Como não tem strings, js idenfica o + como uma operação matemática, então ele converte o true para um numero, e um true é igual a 0.
console.log(false == 0); //== é uma comparação fraca, então ela tenta converter alguns dos lados antes da verificação, então quando ele converte o false para numero ele tem o valor de zero, logo faz a compração e retorna true.
console.log(false === 0); // === é uma comparação forte, o tipo da variavel importa. Ele nao converte nenhum dos lados.

// Parte 06 - Desafio Arrow Function vs Function

const pessoa = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome);
  }
};

pessoa.falar();

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};

pessoa2.falar();

//Qual deles funciona corretamente?
//O código que utiliza a função tradicional do js.

//Por que o outro não funciona? Qual é o comportamento de this em arrow functions?
/*
A função tradicional do js cria um this, então quando chamamos ela o this faz referencia ao objeto pessoa. Deferente da arrow function, que não
cria um this, ela pega do contexto global do sistema, como não foi definido no contexto global um nome, ela imprime undefined.
*/

//Parte 7 — Desafio Final

const gerarRelatorio = () => {
  const totalUsuarios = usuarios.length;
  const usuariosAtivos = usuarios.filter(e => e.ativo === true)?.length;
  
  return {
    totalUsuarios: totalUsuarios,
    usuariosAtivos: usuariosAtivos,
    usuariosInativos: parseInt(totalUsuarios) - parseInt(usuariosAtivos),
    mediaIdade: usuarios.reduce((ac, vl) => ac + vl.idade, 0) / totalUsuarios,
    maiorComprador: listUsuarioMaiorVolumeCompra()?.nome
  }  
}

console.log('===== Relatório =====')
console.log(gerarRelatorio())


// Parte 08 - Desafio Extra

const gerarRelatorioExtra = () => {
  
  return {
    usuarioMaisVelho: usuarios.reduce((ac, vl) => vl.idade > ac.idade ? vl : ac),
    usuarioMaisNovo: usuarios.reduce((ac, vl) => vl.idade < ac.idade ? vl : ac),
    valorMedioCompras: usuarios.map((e) => {
      return { nome: e.nome, valorMedio: (e.compras.reduce((ac, vl) => ac + vl, 0) / e.compras.length)}
    })
  }
}

console.log('===== Relatório Extra =====')
console.log(gerarRelatorioExtra())