const express = require("express");
const app = express();
const Sequelize = require('sequelize')
const bodyparser = require('body-parser')

const sequelize = new Sequelize('hfsolu99_app', 'hfsolu99_app', 'Hfbsn@16@pp', {
	host: "br1034.hostgator.com.br",
	dialect: 'mysql'
})

sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
    
})



app.post('/add',function(req,res){
	res.send('Enviado com Sucesso')
})


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())



/*

sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
    
})

const Categoria = sequelize.define('categoria', {
	categoria: {
		type: Sequelize.STRING
	}
})

Categoria.create({
	categoria: "NOVOS MAPAS"
})
Categoria.sync({force: true})
*/