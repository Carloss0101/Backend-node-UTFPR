const {Router} = require('express');
const Pessoas = require('../models/pessoas');
const { Op } = require('sequelize')
const router = Router();

router.post('/', async (req, res) => {
    const {nome, idade, descricao} = req?.body || null;

    //Aplicando regras semelhante ao banco
    if(!nome || !idade || isNaN(idade) || !descricao) {
        return res.status(400).json({mensagem: "Dados inválidos."});
    }

    //Verificações de tamanho
    if(nome.length > 45) {return res.status(400).json({mensagem: "Nome precisa conter menos de 45 caracteres."})}
    if(descricao.length > 255) {return res.status(400).json({mensagem: "Descrição precisa conter menos de 255 caracteres."})}

    try {
        const resposta = await Pessoas.create({
            nome: nome,
            idade: idade,
            descricao: descricao
        });

        return res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso.",
            usuario: resposta
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({mensagem: "Erro ao criar usuário"});
    }
});

router.get('/', async (req, res) => {
    const { nome, idadeMin, page, limit, ordem } = req.query;

    try {
        const where = {};

        if(nome) {
            where.nome = {
                [Op.like]: `%${nome}%`
            }
        }

        if(idadeMin !== undefined) {
            where.idade = {
                [Op.gte]: Number(idadeMin)
            }
        }
        
        const pagina = Number(page) || 1;
        const quant = Number(limit) || 5;

        const ordenacao = (ordem || 'ASC').toUpperCase();

        if(!["ASC", "DESC"].includes(ordenacao)) {
            return res.status(400).json({mensagem: "Ordenação precisa ser ASC ou DESC."});
        }

        const resultado = await Pessoas.findAll({
            where: where,
            order: [['nome', ordenacao]],
            limit: quant,
            offset: (pagina - 1) * quant
        });

        return res.json(resultado);
    } catch (err) {
        console.log(err);
        return res.status(500).json({mensagem: "Erro ao buscar usuários"});
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if(!id || isNaN(id)) {
        return res.status(400).json({mensagem: "Id inváido."});
    }

    try {
        const resultado = await Pessoas.findOne({
            where: {
                id: id
            }
        })

        if(resultado === null) {
            return res.json({mensagem: "Pessoa não encontrada"});    
        }

        return res.json(resultado);
    } catch (err) {
        console.log(err);
        return res.status(500).json({mensagem: "Erro ao buscar pessoa"});
    }
});

module.exports = router;