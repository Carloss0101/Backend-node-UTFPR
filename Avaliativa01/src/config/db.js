const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trabalho01', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;