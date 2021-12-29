const { Sequelize } = require('sequelize')

sequelize = new Sequelize( `postgresql://${process.env.DATABASE_URL}`, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = sequelize