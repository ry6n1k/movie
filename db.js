const Sequelize = require('sequelize')

const db = new Sequelize(
    'postgres://localhost:5432/movie-db',
    {
        logging: false
    }
)

module.exports = db