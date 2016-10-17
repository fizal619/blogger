var Sequelize = require('sequelize');

// new Sequelize('database', 'username', 'password', options)
var db = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;
