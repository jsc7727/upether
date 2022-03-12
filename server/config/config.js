require('dotenv').config();

module.exports = {
  "development": {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    port: process.env.DEV_DATABASE_PORT,
    dialect: "mysql"
  },
  "test": {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  "production": {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}