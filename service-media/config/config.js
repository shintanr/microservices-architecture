require('dotenv').config();

const {
  DB_USERNAME, 
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
} = process.env;


module.exports = {
  "development": {
    "username": "DB_USERNAME",
    "password": DB_PASSWORD,
    "database": "DB_DATABASE",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "DB_USERNAME",
    "password": DB_PASSWORD,
    "database": "DB_DATABASE",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "DB_USERNAME",
    "password": DB_PASSWORD,
    "database": "DB_DATABASE",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
