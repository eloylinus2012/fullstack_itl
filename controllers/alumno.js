'use strict'

var fs = require('fs');
var path = require('path');

var Alumnos = require('../models/alumno');
var bcrypt = require('bcrypt');

//req.body para post
//req.params para get

async function obtAlumnos(req,res){

    const alumnos = await Alumnos.find();
    if(alumnos)
    {
        res.status(200).send({mensaje: "Alumnos", estatus: 1, datos: alumnos});
    }
    else
    {
        res.status(404).send({mensaje: "No hay alumnos en el catálogo", estatus: 0, datos: {}});
    }
           
}

async function obtAlumnoNC(req,res){
    
    const alumno = await Alumnos.findOne({noctrl:req.params.noctrl});
    if(alumno)
    {
        res.status(200).send({mensaje: "Alumno", estatus: 1, datos: alumno});
    }
    else
    {
        res.status(404).send({mensaje: "No se encontró el alumno en el catálogo", estatus: 0, datos: {}});
    }
           
}

function guardaAlumno(req, res){

    //let alumno = req.body;
    let noctrl = req.body.noctrl;

    //console.log(alumno);

    Alumnos.findOne({noctrl:noctrl},(err,result) => {
        if(err)
        {
            res.status(200).send({mensaje: "Error al buscar el alumno"});
        }
        else
        {
            //console.log('VAL',typeof(result));
            if(!result)
            {
                console.log('NO ENCONTRADO DAR DE ALTA',typeof(val));

                const alumno = new Alumnos();

                alumno.noctrl = req.body.noctrl;
                alumno.nombre = req.body.nombre;
                alumno.appat = req.body.appat;
                alumno.apmat = req.body.apmat;
                alumno.activo = req.body.activo;
                alumno.direccion = req.body.direccion;
                alumno.carrera = req.body.carrera;

                alumno.save((err, AlumnoStored) => { //si funciona todo para el insert confirmadoooooooooooooooooo
                    if (err) {
                        console.error(err);
                        res.status(500).send({ status: 0, mensaje: "Error en la insercion del alumno", datos: {} });
                    }
                    else {
                        if (AlumnoStored) {
                            // console.log('EVENTO ALMACENADO'+ EventoStored);
                            res.status(200).send({ estatus: 1, mensaje: "Alumno almacenado de manera correcta", datos: AlumnoStored });
                        }
                        else {
                            res.status(500).send({ status: 0, mensaje: "No se puedo almacenar el evento", datos: {} });
                        }
                    }
                });

                //res.status(200).send({mensaje: "Alumno NO existente en la BD.", estatus: 1, datos: ""});
            }
            else
            {
                res.status(200).send({mensaje: "Alumno existente en la BD.", estatus: 0, datos: result});
            }
        }
    })
}

function borraAlumno(req,res){

    Alumnos.findOneAndRemove({noctrl:req.params.noctrl},function (err, alumno) {
        if (err){
            res.status(500).send({ status: 0, mensaje: "No se puedo borrar el alumno con numero de control " + req.params.noctrl, datos: {} });
        }
        else{
            res.status(200).send({mensaje: "Alumno con numero de control " + req.params.noctrl + " eliminado", estatus: 1, datos: alumno});
        }
    });
           
}

function borraAlumnoId(req,res){

    Alumnos.findByIdAndRemove(req.params.id,function (err, alumno) {
        if (err){
            res.status(500).send({ status: 0, mensaje: "No se puedo borrar el alumno con id " + req.params.id, datos: {} });
        }
        else{
            res.status(200).send({mensaje: "Alumno con numero id " + req.params.id + " eliminado", estatus: 1, datos: alumno});
        }
    });
           
}

function modAlumno(req,res){

    let datosAlumno = {};

    datosAlumno.nombre = req.body.nombre;
    datosAlumno.appat = req.body.appat;
    datosAlumno.apmat = req.body.apmat;
    datosAlumno.activo = req.body.activo;
    datosAlumno.direccion = req.body.direccion;
    datosAlumno.carrera = req.body.carrera;

    Alumnos.findByIdAndUpdate(req.body._id,datosAlumno,function (err, alumno) {
        if (err){
            res.status(500).send({ status: 0, mensaje: "No se puedo actualizar el alumno con numero de control " + req.body.noctrl, datos: {} });
        }
        else{
            res.status(200).send({mensaje: "Alumno con numero de control " + req.body.noctrl + " actualizado", estatus: 1, datos: alumno});
        }
    });
           
}


module.exports = { 
	obtAlumnos,
    obtAlumnoNC,
    guardaAlumno,
    borraAlumno,
    borraAlumnoId,
    modAlumno
};