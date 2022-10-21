'use strict'

var express = require('express');

var CarreraController = require('../controllers/carrera');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

api.get('/carrera', md_auth.ensureAuth, CarreraController.obtCarreras);

module.exports = api;