const { Sequelize } = require('sequelize');
const DatabaseConfig = require('../config/DatabaseConfig');

const dbConnection = new Sequelize(DatabaseConfig);

try {
  dbConnection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = dbConnection;
