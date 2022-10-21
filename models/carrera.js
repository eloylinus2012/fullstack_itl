var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarreraSchema = Schema({

    clave: String,
    nombre: String,
    reticula: String,
    year: String,
    especialidad: String

});

module.exports = mongoose.model('Carrera',CarreraSchema);