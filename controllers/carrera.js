'use strict'

var fs = require('fs');
var path = require('path');

var Carreras = require('../models/carrera');

//req.body para post
//req.params para get


async function obtCarreras(req,res){

    const carreras = await Carreras.find();
    if(carreras)
    {
        res.status(200).send({mensaje: "Carreras", estatus: 1, datos: carreras});
    }
    else
    {
        res.status(404).send({mensaje: "No hay carreras en el catálogo", estatus: 0, datos: {}});
    }
           
}

module.exports = { 
	obtCarreras,
};