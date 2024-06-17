// models/PhoneNumber.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const PhoneNumber = sequelize.define('PhoneNumber', {
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contactId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PhoneNumber;
