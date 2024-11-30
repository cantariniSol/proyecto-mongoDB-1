'use strict';

var express = require('express');
var body_parser = require('body-parser');
var app = express(); //Controlador o framework http

//Rutas
var fruta_routes = require('./routes/frutas');

//Body-parse
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

// Configuraremos CORS
app.use('/api', fruta_routes)



module.exports = app