'use strict'

var fs = require('fs');
var path = require('path');

var Usuarios = require('../models/usuario');
var bcrypt = require('bcrypt');
var jwt = require('../services/jwt');
var moment = require('moment');

//req.body para post
//req.params para get

function home(req,res){
    res.status(200).send({message: "HOME"});
}

async function valida(req,res){

    console.log(req.body);
    //const usuario = await Usuarios.findOne({usuario:req.body.usuario,password:req.body.password});
    const usuario = await Usuarios.findOne({usuario:req.body.usuario});
    if(usuario)
    {
        const valido = await bcrypt.compare(req.body.password,usuario.password);
        if(valido){
            usuario.password = ":)";
            res.status(200).send({mensaje: "Usuario Correcto", estatus: 1, datos: {usuario:usuario,token: jwt.createToken(usuario)}});
        }
        else{
            res.status(200).send({mensaje: "Password Incorrecto", estatus: 0, datos: {}});
        }
    }
    else
    {
        res.status(404).send({mensaje: "Usuario inexistente", estatus: 0, datos: {}});
    }
           
}

module.exports = { 
	valida,
    home
};