const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

app.get('/home', (req, res) => res.sendFile(__dirname +'/views/home.html'))

app.get('/registro', (req, res) => res.sendFile(__dirname +'/views/resgister.html'))

app.get('/login', (req, res) => res.sendFile(__dirname +'/views/login.html'))

app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});