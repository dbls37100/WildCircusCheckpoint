const Sequelize = require('sequelize')
const tournéesModel = require('./models/tournées')


const sequelize = new Sequelize('codementor', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  password: "Nazelle37530.",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Acts = tournéesModel(sequelize, Sequelize)


module.exports = {
  Acts
}