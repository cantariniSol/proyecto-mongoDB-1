'use strict';

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrutaSchema = Schema({
    nombre: { type: String, required: true },
    color: { type: String, required: true },
    temporada: { type: Boolean, required: true }
});

module.exports = mongoose.model('Fruta', FrutaSchema);