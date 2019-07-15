const express = require('express');
const db = require('./data/dbConfig.js');
const accountRoutes = require("./routes/accounts");
const server = express();

server.use("/api/accounts", accountRoutes)

server.use(express.json());

module.exports = server;