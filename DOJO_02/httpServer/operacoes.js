const getAdicao = () => {
    return "Você está na rota adição";
}

const postAdicao = (numA, numB) => {
    if(!numA || !numB || isNaN(numA) || isNaN(numB)) {
        return "Números de A ou B inválidos!";
    }

    return numA + numB;
}

const getSubtracao = () => {
    return "Você está na rota de subtração"
}

const postSubtracao = (numA, numB) => {
    if(!numA || !numB || isNaN(numA) || isNaN(numB)) {
        return "Números de A ou B inválidos!"
    }

    return numA - numB;
}

const getMultiplicacao = () => {
    return "Você está na rota de multiplicação!"
}

const postMultiplicacao = (numA, numB) => {
    if(!numA || !numB || isNaN(numA) || isNaN(numB)) {
        return "Números de A ou B inválidos!";
    }
    return numA * numB;
}

const getDivisao = () => {
    return "Você está na rota de Divisão!";
}

const postDivisao = (numA, numB) => {
    if(!numA || !numB || isNaN(numA) || isNaN(numB)) {
        return "Números de A ou B inválidos!";
    }
    return numA / numB;
}

module.exports = {getAdicao, postAdicao, getSubtracao, postSubtracao, getMultiplicacao, postMultiplicacao, getDivisao, postDivisao}