require('dotenv').config();
const express = require('express');
const router = require('../app/router/index');
const NodeConfig = require('../config/NodeConfig');
const model = require('../app/models');

/**
 * Express
 */
const app = express();
app.use(express.json());

/**
 * Database
 */
model.dbConnection.sync().then(() => {});

/**
 * Routes
 */
router(app);
app.get('/', (req, res) => {
  res.send('Sequelize, mysql, express, and javascript app!');
});

/**
 * Server
 */
app.listen(NodeConfig.NODE_PORT, () => {
  console.log(`Project listening at http://localhost:${NodeConfig.NODE_PORT}`);
});
