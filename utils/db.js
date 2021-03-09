const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("DAtabase connection established");
} catch (e) {
  console.log("Error connecting to DB");
}

module.exports = sequelize;
