const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Pessoas = sequelize.define('Pessoa', {
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {timestamps: false}
);

module.exports = Pessoas