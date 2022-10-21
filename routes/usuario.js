'use strict'

var express = require('express');

var UsuarioController = require('../controllers/usuario');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

api.get('/', UsuarioController.home);
api.post('/valida',UsuarioController.valida);
// api.post('/trae_divisiones',UsuarioController.trae_divisiones);
// api.post('/trae_zonas',UsuarioController.trae_zonas);
// api.post('/trae_procesos',UsuarioController.trae_procesos);
// //api.post('/inserta_usuario',UsuarioController.inserta_usuario);
// api.post('/trae_usuarios',UsuarioController.trae_usuarios);
// api.post('/guarda_usuarios',UsuarioController.guarda_usuarios);

module.exports = api;