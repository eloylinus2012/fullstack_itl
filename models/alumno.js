var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema = Schema({

    noctrl: String,
    nombre: String,
    appat: String,
    apmat: String,
    activo: Boolean,
    direccion: String,
    carrera: Object

});

module.exports = mongoose.model('Alumno',AlumnoSchema);