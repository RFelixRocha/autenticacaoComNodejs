const dotenv = require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

module.exports = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dialect: process.env.DIALECT,
  storage:'./__tests__/database.sqlite',
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}