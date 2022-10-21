var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({

    usuario: String,
    password: String,
    nivel: Number,
    nombre: String

});

module.exports = mongoose.model('Usuario',UsuarioSchema);