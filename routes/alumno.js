'use strict'

var express = require('express');

var AlumnoController = require('../controllers/alumno');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

api.get('/alumno', md_auth.ensureAuth, AlumnoController.obtAlumnos);
api.get('/alumno/:noctrl', md_auth.ensureAuth, AlumnoController.obtAlumnoNC);
api.post('/alumno', md_auth.ensureAuth, AlumnoController.guardaAlumno);
api.patch('/alumno', md_auth.ensureAuth,AlumnoController.modAlumno);
//api.delete('/alumno/:noctrl',AlumnoController.borraAlumno);
api.delete('/alumno/:id',md_auth.ensureAuth, AlumnoController.borraAlumnoId);

module.exports = api;