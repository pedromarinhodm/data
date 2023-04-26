const Sequelize = require('sequelize')

//conexão banco dados mysql
const sequelize = new Sequelize('sistemacadastro', 'root', '88926459', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}