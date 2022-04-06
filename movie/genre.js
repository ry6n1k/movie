module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genre", {
        fullname: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })
    
    return Genre
}