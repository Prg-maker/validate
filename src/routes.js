const dirname = __dirname
const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const Post = require('../models/Post')

routes.use(express.static(dirname + "/view/style"))
routes.use(express.static(dirname + "/view/script"))

routes.use(bodyParser.urlencoded({extended:false}))
routes.use(bodyParser.json())

routes.get('/', (req, res) =>{
    res.sendFile(dirname + "/view/pages/index.html")
})

routes.get('/home',(req, res)=>{
    res.sendFile(dirname + '/view/pages/home')

    
})


routes.post('/add', (req, res) =>{
    Post.create({
        name:  req.body.name,
        email: req.body.email
    }).then(function(){
        res.redirect('/home')
    }).catch(function(){
        res.send('Houve um erro ao criar')
    })
})


module.exports = routes