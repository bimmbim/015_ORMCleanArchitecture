const db = require("../models");

async function connectDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;
