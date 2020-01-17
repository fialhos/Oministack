const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://vini:vi240596@cluster0-shard-00-00-chyfh.mongodb.net:27017,cluster0-shard-00-01-chyfh.mongodb.net:27017,cluster0-shard-00-02-chyfh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

 

// METODO HTTP : GET - puscando recursos
// METODO HTTP : POST - criar informarção
// METODO HTTP : PUT - editar usuario
// METODO HTTP : - DELETE

// PARAMETROS :
// QUERY PARAMS : GET gerelamente, parametros de busca(filtro, ordenação , paginação) - request.query 
// ROUTE PARAMS : POST,DELETE geralmete, identificar recurso - request.params     
// BODY : PUT, POST geralmete , dados para criação e alteraçãod e registro - request.body

// MongoDB (Não relacional)



