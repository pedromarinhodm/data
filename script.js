
const express = require("express"); 
const app = express();
//const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')




//config
    //template
       /* app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars') */
    //body parser

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json()) 
    

//Rotas

        app.get('/cad', function(req, res){
            res.send('rota de cadastro de posts')
        })

        app.post('/add', function(req, res){
          /*  Post.create({
                nome: req.body.nome,
                email: req.body.email
            }).then(function(){
                res.send("Success")
            }).catch(function(erro){
                res.send("Error" + erro)
            })   */
            res.send('rota de cadastro de posts-2')
        })


app.listen(8081, function(){
    console.log("url http://localhost:8081");
});































//                              database               user    senha

/*sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("Erro"+erro)
})
*/

//Postagem
/*const Postagem = sequelize.define('postagens', {
    Nome: {
        type: Sequelize.TEXT
    },
    Email: {
        type: Sequelize.TEXT
    }
})
*/

    














///----------------------------------------------------- Ultima linha do cod
//app.listen(8081)
//localhost:8081























