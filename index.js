'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;


// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/curso_mongodb_uno')
    .then(() => {
        console.log('La conexión a MongoDB se ha realizado correctamente');


        app.listen(port, ()=>{
            console.log('El servidor esta corriendo el puerto 3800')
        })
    })
    .catch(err => console.error('Error al conectar a MongoDB:', err));
