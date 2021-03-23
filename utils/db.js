const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const context = process.env.NODE_ENV || "local";
let sequelize;
console.log(context);
if (context === "production") {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
  );
}

try {
  sequelize.authenticate();
  console.log("DAtabase connection established");
} catch (e) {
  console.log("Error connecting to DB");
}

module.exports = sequelize;
