const Sequelize = require('sequelize')

const  sequelize= new Sequelize('postapp', 'daniel', 'euamobasquete', {
    host:"",
    dialect:"mysql"
})

module.exports = {
    sequelize,
    Sequelize
}