'use strict';

var express = require('express');
var FrutaController = require('../controllers/fruta');


var api = express.Router();

api.get('/listar-frutas', FrutaController.getFrutas);
api.post('/crear-fruta', FrutaController.saveFruta);
api.get('/listar-fruta/:id', FrutaController.getFruta);
api.put('/editar-fruta/:id', FrutaController.updateFruta);
api.delete('/borrar-fruta/:id', FrutaController.deleteFruta);

module.exports = api
