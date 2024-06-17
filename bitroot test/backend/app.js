// app.js
const express = require('express');
const app = express();
const contactsRouter = require('./routes/contacts');

app.use(express.json());

app.use('/api', contactsRouter);

module.exports = app;
