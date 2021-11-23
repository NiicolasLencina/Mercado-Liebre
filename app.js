const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

const port = 3000

app.get('/home', (req, res) => res.sendFile(__dirname +'/views/home.html'))

app.get('/registro', (req, res) => res.sendFile(__dirname +'/views/resgister.html'))

app.get('/login', (req, res) => res.sendFile(__dirname +'/views/login.html'))

app.listen(port, () => console.log("FUNCIONA!!!"))