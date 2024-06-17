// models/Contact.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Contact = sequelize.define('Contact', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Contact;
