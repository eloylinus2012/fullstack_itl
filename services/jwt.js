'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'iT3#le.';


exports.createToken = function(user){

	var payload = {
		sub: user._id,
		usuario: user.usuario,
		nombre: user.nombre,
		nivel: user.nivel,
		iat: moment().unix(),
		exp: moment().add(30,'days').unix

	};

	return jwt.encode(payload,secret);
};  