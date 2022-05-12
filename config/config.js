require("dotenv").config();
module.exports = {
  development: {
    username: process.env.USERNAME_DEV,
    password: process.env.PASSWORD_DEV,
    database: process.env.DATABASE_DEV,
    host: process.env.HOST_DEV,
    dialect: process.env.DIALECT_DEV,
  },
  test: {
    username: process.env.USERNAME_DEV,
    password: process.env.PASSWORD_DEV,
    database: process.env.DATABASE_DEV,
    host: process.env.HOST_DEV,
    dialect: process.env.DIALECT_DEV,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL || DATABASE_URL,
    dialect: process.env.DIALECT_DEV,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
