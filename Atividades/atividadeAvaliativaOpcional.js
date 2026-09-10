const participantes = [
  {nome: "Carlos", idade: 20, curso: "Engenharia de Software", presenca: true, notas: [8.2, 9, 10]},
  {nome: "Ana", idade: 21, curso: "Ciência da Computação", presenca: true, notas: [7.5, 8.8, 9.2]},
  {nome: "Bruno", idade: 19, curso: "Sistemas de Informação", presenca: false, notas: [6.5, 7, 8]},
  {nome: "Mariana", idade: 22, curso: "Engenharia de Software", presenca: true, notas: [9, 9.5, 8.7]},
  {nome: "Lucas", idade: 20, curso: "Análise e Desenvolvimento de Sistemas", presenca: false, notas: [5.8, 7.2, 6.9]}
];

const gerarRelatorioIndividual = (p) => {
    if(!p || p?.length === 0) return 0;
    const mediaNota = p.notas.reduce((ac, vl) => ac + vl, 0) / p.notas.length
    return {
        nome: p.nome,
        curso: p.curso,
        notaMedia: mediaNota.toFixed(2),
        situacao: mediaNota >= 7 ? "Aprovado" : "Em Recuperação",
        maiorIdade: p.idade >= 18 ? true : false,
        presenca: p.presenca
    }
}

const gerarRelatorioGeralParticipantes = () => {
    return participantes.map((e) => gerarRelatorioIndividual(e));
}

console.log(gerarRelatorioGeralParticipantes())

function gerarRelatorioGeral() {
    const relatorioPart = gerarRelatorioGeralParticipantes();

    return {
      totalParticipantes: participantes.length,
      totalParticipantesPresentes: participantes.filter((e) => e.presenca).length,
      totalParticipantesAusentes: participantes.filter((e) => !e.presenca).length,
      notaMediaGeral: relatorioPart.reduce((ac, vl) => ac + vl.notaMedia, 0) / participantes.length,
      maiorMedia: relatorioPart.reduce((ac, vl) => vl.notaMedia > ac.notaMedia ? vl : ac).nome,
      aprovados: relatorioPart.filter((e) => e.situacao === 'Aprovado').map((e) => e.nome)
    }
}

console.log(gerarRelatorioGeral())