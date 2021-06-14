const db = require('./db')

const Post = db.sequelize.define('postagens', {
    name:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    }
})
module.exports = Post