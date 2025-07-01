"use strict";

var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "database",
  port: 3306,
  user: "root",
  password: "1234",
  database: "api_ideas",
});

connection.connect(function (err) {
  if (err) {
    console.log("Error on database connection:", err.message);
    throw err;
  }

  console.log("Database connection active.");
});

module.exports = connection;
