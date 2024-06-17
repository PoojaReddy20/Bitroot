// database/connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('contact_list', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
