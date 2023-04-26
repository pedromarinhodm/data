const db = require('./db')

const Post = db.sequelize.define('postagens', {
    nome: {
        type: db.Sequelize.TEXT
    },
    email: {
        type: db.Sequelize.TEXT
    }
})
//Post.sync({force: true})
//comentar apos uso ^^^ 
//para evitar recriar a table

module.exports = Post

