'use strict'

var fs = require('fs');
var path = require('path');

var Usuarios = require('../models/usuario');
var bcrypt = require('bcrypt');
//var moment = require('moment');
//const excelToJson = require('convert-excel-to-json');


//req.body para post
//req.params para get

    function home(req,res){

        res.status(200).send({message: "OKOKOKOK"});
    }

    function guarda_usuarios(req, res){

        Usuarios.find((err,result) => {
            if(err)
            {
                res.status(200).send({message: "Error en la peticion"});
            }
            else
            {
                console.log('VAL',typeof(result));
                if(!result)
                {
                    console.log('NO ENCONTRADO',typeof(val));
                    //objCust.valid = false;
                    res.status(200).send({message: "No existen Usuarios cargadas en la BD"});
                }
                else
                {
                
                    //res.status(200).send({message: "datos", data:companies});
                    console.log('SI ENCONTRADO',typeof(result));
                    res.status(200).send({message: "SIIIIIx", estatus: 1, datos: result});
                    //objCust.valid = true;
                
                }
            }
        })
    }

    function trae_usuarios(req, res){

        Usuarios.find((err,result) => {
            if(err)
            {
                res.status(200).send({message: "Error en la peticion"});
            }
            else
            {
                console.log('VAL',typeof(result));
                if(!result)
                {
                    console.log('NO ENCONTRADO',typeof(val));
                    //objCust.valid = false;
                    res.status(200).send({message: "No existen Usuarios cargadas en la BD"});
                }
                else
                {
                
                    //res.status(200).send({message: "datos", data:companies});
                    console.log('SI ENCONTRADO',typeof(result));
                    res.status(200).send({message: "SIIIIIx", estatus: 1, datos: result});
                    //objCust.valid = true;
                
                }
            }
        })
    }

    function trae_divisiones(req, res){


        Division.find((err,result) => {
                    if(err)
                    {
                        res.status(200).send({message: "Error en la peticion"});
                    }
                    else
                    {
                        console.log('VAL',typeof(result));
                        if(!result)
                        {
                            console.log('NO ENCONTRADO',typeof(val));
                            //objCust.valid = false;
                            res.status(200).send({message: "No existen Divisiones cargadas en la BD"});
                        }
                        else
                        {
                        
                            //res.status(200).send({message: "datos", data:companies});
                            console.log('SI ENCONTRADO',typeof(result));
                            res.status(200).send({message: "SIIIIIx", estatus: 1, datos: result});
                            //objCust.valid = true;
                        
                        }
                    }
        })
    }

    function trae_zonas(req, res){


        Zona.find((err,result) => {
                    if(err)
                    {
                        res.status(200).send({message: "Error en la peticion"});
                    }
                    else
                    {
                        console.log('VAL',typeof(result));
                        if(!result)
                        {
                            console.log('NO ENCONTRADO',typeof(val));
                            //objCust.valid = false;
                            res.status(200).send({message: "No existen Zonas cargadas en la BD"});
                        }
                        else
                        {
                        
                            //res.status(200).send({message: "datos", data:companies});
                            console.log('SI ENCONTRADO',typeof(result));
                            res.status(200).send({message: "SIIIIIx", estatus: 1, datos: result});
                            //objCust.valid = true;
                        
                        }
                    }
        })
    }

    function trae_procesos(req, res){


        Proceso.find((err,result) => {
                    if(err)
                    {
                        res.status(200).send({message: "Error en la peticion"});
                    }
                    else
                    {
                        console.log('VAL',typeof(result));
                        if(!result)
                        {
                            console.log('NO ENCONTRADO',typeof(val));
                            //objCust.valid = false;
                            res.status(200).send({message: "No existen Procesos cargadas en la BD"});
                        }
                        else
                        {
                        
                            //res.status(200).send({message: "datos", data:companies});
                            console.log('SI ENCONTRADO',typeof(result));
                            res.status(200).send({message: "SIIIIIx", estatus: 1, datos: result});
                            //objCust.valid = true;
                        
                        }
                    }
        })
    }



    async function valida(req,res){

        let filtro = {};

        console.log(req.body); 

        let usu_rpe = req.body.datos_usuario.usu_rpe;
        let usu_password = req.body.datos_usuario.usu_password;

        const usuario = await Usuarios.findOne({usu_rpe:usu_rpe});
            //, { "usu_nombre": 1, "usu_nivel": 1, "usu_estatus":1, "zona_clave":1, "zona_nombre":1, "zona_nem":1 }
        if(usuario)
        {
            const valido = await bcrypt.compare(usu_password,usuario.usu_password);

            if(valido)
            {
                res.status(200).send({mensaje: "Usuario Correcto", estatus: 1, datos: usuario});
            }
            else
            {
                res.status(200).send({mensaje: "Password Incorrecto", estatus: 0, datos: {}});
            }


        }
        else
        {
            res.status(200).send({mensaje: "El rpe es inexistente", estatus: 0, datos: {}});
        }

        // var BCRYPT_SALT_ROUNDS = 12;

        // console.log(BCRYPT_SALT_ROUNDS);

        // bcrypt.hash(usu_password, BCRYPT_SALT_ROUNDS).then(function(hashedPassword){
        //     console.log(hashedPassword);
        //     filtro = {'usu_rpe':usu_rpe, 'usu_password':hashedPassword};
        //     Usuarios.findOne(filtro,(err,result) => {
        //         if(err)
        //         {
        //             res.status(200).send({message: "Error en la peticion"});
        //         }
        //         else
        //         {
        //             console.log('VAL',typeof(result));
        //             if(!result)
        //             {
        //                 console.log('NO ENCONTRADO',typeof(val));
        //                 //objCust.valid = false;
        //                 res.status(200).send({message: "No existen companies cargadas en la BD"});
        //             }
        //             else
        //             {
                    
        //                 //res.status(200).send({message: "datos", data:companies});
        //                 console.log('SI ENCONTRADO',typeof(result));
        //                 res.status(200).send({message: "SIIIIIx", estatus: 1, val: result});
        //                 //objCust.valid = true;
                    
        //             }
        //         }
        //     });

        //     //return Usuarios.saveUser(usu_rpe, hashedPassword);
        // }) 
        // .then(function()
        // {
        //     // res.status(200).send({message: "Snoo", estatus: 0});
        // });

                
           // next();
               
    }


// function inserta_usuario(){
//     let filtro = {};

//     console.log(req.body); 

//     let usu_rpe = req.body.datos_usuario.usu_rpe;
//     let usu_password = req.body.datos_usuario.usu_password;

// }


    /* filtro = {'usu_rpe':usu_rpe, 'usu_password':usu_password};
    Usuarios.findOne(filtro,(err,result) => {
	 	if(err)
        {
	 		res.status(500).send({message: "Error en la peticion"});
	 	}
        else
        {
	 		console.log('VAL',typeof(result));
	 		if(!result)
            {
	 			console.log('NO ENCONTRADO',typeof(val));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
	 		}
            else
            {
            
	 			//res.status(200).send({message: "datos", data:companies});
	 			console.log('SI ENCONTRADO',typeof(result));
				res.status(200).send({message: "SIIIIIx", estatus: 1, val: result});
	 			//objCust.valid = true;
            
            }
        }
    });   */
//}

function prueba(req,res){

	Servicios.findOne({},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(val));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				console.log('SI ENCONTRADO',typeof(result));
				res.status(200).send({message: "SIIIII", val: result});
				//objCust.valid = true;

			}
		}
	});


}


function poligonos_agencias(req,res,next){

	Agencias.find({},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				//console.log('SI ENCONTRADO',typeof(result));

				

                for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < result[i].geometry.coordinates[0].length; j++) {
                        //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                        let lat = 0;
                        let long = 0;
                        lat = result[i].geometry.coordinates[0][j][1];
                        console
                        long = result[i].geometry.coordinates[0][j][0];
                        result[i].geometry.coordinates[0][j][0] = lat;
                        result[i].geometry.coordinates[0][j][1] = long;
                        
                    }
                    
                    
                }
                res.status(200).send({message: "SIIIII", geojson: result}); 
				//objCust.valid = true;

			}
		}


	});


}

function poligono_agencia(req,res,next){

    let zona = req.params.zona;
    let agencia = req.params.agencia;

    let filtro = {};

    if(agencia !== 'A'){
        filtro = {'properties.zona':zona,'properties.agencia':agencia};
    }else{
        filtro = {'properties.zona':zona};
    }

	Agencias.find(filtro,(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				//console.log('SI ENCONTRADO',typeof(result));

				

                for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < result[i].geometry.coordinates[0].length; j++) {
                        //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                        let lat = 0;
                        let long = 0;
                        lat = result[i].geometry.coordinates[0][j][1];
                        console
                        long = result[i].geometry.coordinates[0][j][0];
                        result[i].geometry.coordinates[0][j][0] = lat;
                        result[i].geometry.coordinates[0][j][1] = long;
                        
                    }
                    
                    
                }
                res.status(200).send({message: "SIIIII", geojson: result}); 
				//objCust.valid = true;

			}
		}


	});


}

function poligono_sector(req,res,next){


    let zona = req.params.zona;
    let agencia = req.params.agencia;
    let sector = req.params.sector;


    let filtro = {};

    if(agencia !== 'A' && sector !== 'A'){
        filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector};
    }else if(agencia === 'A' && sector === 'A'){
        filtro = {'properties.zona':zona};
    }else if(agencia !== 'A' && sector === 'A'){
        filtro = {'properties.zona':zona,'properties.agencia':agencia};
    }


	Sectores.find(filtro,(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				//console.log('SI ENCONTRADO',typeof(result));

				

                for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < result[i].geometry.coordinates[0].length; j++) {
                        //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                        let lat = 0;
                        let long = 0;
                        lat = result[i].geometry.coordinates[0][j][1];
                        console
                        long = result[i].geometry.coordinates[0][j][0];
                        result[i].geometry.coordinates[0][j][0] = lat;
                        result[i].geometry.coordinates[0][j][1] = long;
                        
                    }
                    
                    
                }
                res.status(200).send({message: "SIIIII", geojson: result}); 
				//objCust.valid = true;

			}
		}


	});


}

function poligono_ruta(req,res,next){


    let zona = req.params.zona;
    let agencia = req.params.agencia;
    let sector = req.params.sector;
    let ruta = req.params.ruta;

    let filtro = {};

    if(ruta !== "A"){
        filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector,'properties.ruta':ruta};
    }else{
        filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector};
    }



	Rutas.find(filtro,(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				//console.log('SI ENCONTRADO',typeof(result));

				

                for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < result[i].geometry.coordinates[0].length; j++) {
                        //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                        let lat = 0;
                        let long = 0;
                        lat = result[i].geometry.coordinates[0][j][1];
                        console
                        long = result[i].geometry.coordinates[0][j][0];
                        result[i].geometry.coordinates[0][j][0] = lat;
                        result[i].geometry.coordinates[0][j][1] = long;
                        
                    }
                    
                    
                }
                res.status(200).send({message: "SIIIII", geojson: result}); 
				//objCust.valid = true;

			}
		}


	});


}

function poligonos_agencias_geojson(req,res,next){


	Agencias.find({},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				console.log('SI ENCONTRADO',typeof(result));

                let geojson = {type:"FeatureCollection",features:[]};

                result.forEach(element => {

                    let feature = {type:"Feature",geometry:{}};
                    feature.geometry = element.geometry;
                    geojson.features.push(feature);
                    
                });
				res.status(200).send({message: "SIIIII", geojson: geojson});
				//objCust.valid = true;

			}
		}


	});


}

function servicios_agencia(req,res){

	Servicios.find({},null,{limit:20},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No hay servicios!"});
			}else{
				//res.status(200).send({message: "datos", data:companies});

                for (let i = 0; i < result.length; i++) {
                        //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                        let lat = 0;
                        let long = 0;
                        lat = result[i].location.coordinates[1];
                        long = result[i].location.coordinates[0];;
                        result[i].location.coordinates[0] = lat;
                        result[i].location.coordinates[1] = long;
                        

                    
                    
                }
				console.log('SI ENCONTRADO',typeof(result));
				res.status(200).send({message: "OK", servicios: result});
				//objCust.valid = true;

			}
		}


	});
}

function poligonos_sectores_agencia(req,res,next){

    let agencia = req.params.id;
	Sectores.find({'properties.agencia':agencia},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No existen companies cargadas en la BD"});
			}else{
				//res.status(200).send({message: "datos", data:companies});
				//console.log('SI ENCONTRADO',typeof(result));

				

                for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < result[i].geometry.coordinates[0].length; j++) {
                        //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                        let lat = 0;
                        let long = 0;
                        lat = result[i].geometry.coordinates[0][j][1];
                        console
                        long = result[i].geometry.coordinates[0][j][0];
                        result[i].geometry.coordinates[0][j][0] = lat;
                        result[i].geometry.coordinates[0][j][1] = long;
                        
                    }
                    
                    
                }
                res.status(200).send({message: "SIIIII", geojson: result}); 
				//objCust.valid = true;

			}
		}


	});


}

//CATALOGOS

function cat_agencias(req,res){

    let zona = req.params.zona;
    let filtro = {};

    filtro = {'properties.zona':zona};

	Agencias.find(filtro,(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No hay servicios!"});
			}else{
				//res.status(200).send({message: "datos", data:companies});

				console.log('SI ENCONTRADO',typeof(result));
				res.status(200).send({message: "OK", agencias: result});
				//objCust.valid = true;

			}
		}


	});
}

function cat_sectores(req,res){

    let agencia = req.params.agencia;
	Sectores.find({'properties.agencia':agencia},'properties',{sort:{'properties.sector': 1}},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No hay servicios!"});
			}else{
				//res.status(200).send({message: "datos", data:companies});

				console.log('SI ENCONTRADO',typeof(result));
				res.status(200).send({message: "OK", sectores: result});
				//objCust.valid = true;

			}
		}

	});
}

function cat_rutas(req,res){

    let zona = req.params.zona;
    let agencia = req.params.agencia;
    let sector = req.params.sector;
    let ruta = req.params.ruta;

    let filtro = {};

    if(ruta !== "A"){
        filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector,'properties.ruta':ruta};
    }else{
        filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector};
    }

    

	Rutas.find(filtro,'properties',{sort:{'properties.ruta': 1}},(err,result) => {
		if(err){
			res.status(500).send({message: "Error en la peticion"});
		}else{
			console.log('VAL',typeof(result));
			if(!result){
				console.log('NO ENCONTRADO',typeof(result));
				//objCust.valid = false;
				res.status(404).send({message: "No hay servicios!"});
			}else{
				//res.status(200).send({message: "datos", data:companies});

				console.log('SI ENCONTRADO',typeof(result));
				res.status(200).send({message: "OK", rutas: result});
				//objCust.valid = true;

			}
		}


	});
}

function calcular_usuarios(req,res){


    //let form = req.body.form;
    let nivel_calculo = req.body.nivel_calculo;
    let zona = req.body.zona;

    console.log(req.body);

    //res.status(200).send({message: "HOLLALALALALALALA"});

    // let zona = req.params.zona;
    let agencia = req.body.form.agencia;
    let sector = req.body.form.sector;
    let ruta = req.body.form.ruta;

    let poligono = {};
    let filtro = {};

    //investigamos a que nivel vamos a sacar el poligono con la variable nivel_calculo

    switch (nivel_calculo) {
        case "NA":
            //Agencia
            filtro = {'properties.zona':zona,'properties.agencia':agencia};
            console.log(filtro);
            
            Agencias.findOne(filtro,(err,result) => {
                if(err){
                    res.status(500).send({message: "Error en la peticion"});
                }else{
                    console.log('VAL',typeof(result));
                    if(!result){
                        console.log('NO ENCONTRADO',typeof(result));
                        //objCust.valid = false;
                        res.status(404).send({message: "No existen companies cargadas en la BD"});
                    }else{
                        //db.servicios.countDocuments( { location: { $geoWithin: { $geometry: agencia.geometry } } } ).count()
                        Servicios.countDocuments({ location: { $geoWithin: { $geometry: result.geometry } } },(err,result) => {
                            if(err){
                                res.status(500).send({message: "Error en la peticion"});
                            }else{
                                console.log('VAL',typeof(result));
                                if(!result){
                                    console.log('NO ENCONTRADO',typeof(result));
                                    //objCust.valid = false;
                                    res.status(404).send({message: "No existen companies cargadas en la BD"});
                                }else{                    
                                    res.status(200).send({message: "Numero de Usuarios", total_usuarios: result});                     
                                }
                            }
                        });
        
                    }
                }
        
        
            });
            
            break;

            case "NS":
                //Agencia
                filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector};
                console.log(filtro);
                
                Sectores.findOne(filtro,(err,result) => {
                    if(err){
                        res.status(500).send({message: "Error en la peticion"});
                    }else{
                        console.log('VAL',typeof(result));
                        if(!result){
                            console.log('NO ENCONTRADO',typeof(result));
                            //objCust.valid = false;
                            res.status(404).send({message: "No existen companies cargadas en la BD"});
                        }else{
                            //db.servicios.countDocuments( { location: { $geoWithin: { $geometry: agencia.geometry } } } ).count()
                            Servicios.countDocuments({ location: { $geoWithin: { $geometry: result.geometry } } },(err,result) => {
                                if(err){
                                    res.status(500).send({message: "Error en la peticion"});
                                }else{
                                    console.log('VAL',typeof(result));
                                    if(!result){
                                        console.log('NO ENCONTRADO',typeof(result));
                                        //objCust.valid = false;
                                        res.status(404).send({message: "No existen companies cargadas en la BD"});
                                    }else{                    
                                        res.status(200).send({message: "Numero de Usuarios", total_usuarios: result});                     
                                    }
                                }
                            });
            
                        }
                    }
            
            
                });
                
                break;

                case "NR":
                    //Agencia
                    filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector,'properties.ruta':ruta};
                    console.log(filtro);
                    
                    Rutas.findOne(filtro,(err,result) => {
                        if(err){
                            res.status(500).send({message: "Error en la peticion"});
                        }else{
                            console.log('VAL',typeof(result));
                            if(!result){
                                console.log('NO ENCONTRADO',typeof(result));
                                //objCust.valid = false;
                                res.status(404).send({message: "No existen companies cargadas en la BD"});
                            }else{
                                //db.servicios.countDocuments( { location: { $geoWithin: { $geometry: agencia.geometry } } } ).count()
                                Servicios.countDocuments({ location: { $geoWithin: { $geometry: result.geometry } } },(err,result) => {
                                    if(err){
                                        res.status(500).send({message: "Error en la peticion"});
                                    }else{
                                        console.log('VAL',typeof(result));
                                        if(!result){
                                            console.log('NO ENCONTRADO',typeof(result));
                                            //objCust.valid = false;
                                            res.status(404).send({message: "No existen companies cargadas en la BD"});
                                        }else{                    
                                            res.status(200).send({message: "Numero de Usuarios", total_usuarios: result});                     
                                        }
                                    }
                                });
                
                            }
                        }
                
                
                    });
                    
                    break;
        default:
            break;
    }
}

function traer_usuarios(req,res){

    let zona = req.body.zona;

    console.log(req.body);

    //res.status(200).send({message: "HOLLALALALALALALA"});

    // let zona = req.params.zona;
    let agencia = req.body.form.agencia;
    let sector = req.body.form.sector;
    let ruta = req.body.form.ruta;

    let poligono = {};
    let filtro = {};

    filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector,'properties.ruta':ruta};
    console.log(filtro);
    
    Rutas.findOne(filtro,(err,result) => {
        if(err){
            res.status(500).send({message: "Error en la peticion"});
        }else{
            console.log('VAL',typeof(result));
            if(!result){
                console.log('NO ENCONTRADO',typeof(result));
                //objCust.valid = false;
                res.status(404).send({message: "No existen companies cargadas en la BD"});
            }else{
                //db.servicios.countDocuments( { location: { $geoWithin: { $geometry: agencia.geometry } } } ).count()
                Servicios.find({ location: { $geoWithin: { $geometry: result.geometry } } },(err,result) => {
                    if(err){
                        res.status(500).send({message: "Error en la peticion"});
                    }else{
                        console.log('VAL',typeof(result));
                        if(!result){
                            console.log('NO ENCONTRADO',typeof(result));
                            //objCust.valid = false;
                            res.status(404).send({message: "No existen usuarios cargados en la BD"});
                        }else{      
                            
                            for (let i = 0; i < result.length; i++) {
                                //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                                let lat = 0;
                                let long = 0;
                                lat = result[i].location.coordinates[1];
                                long = result[i].location.coordinates[0];;
                                result[i].location.coordinates[0] = lat;
                                result[i].location.coordinates[1] = long;
                                
        
                            
                            
                            }
                            
                            res.status(200).send({message: "Usuarios", usuarios: result});                     
                        }
                    }
                });

            }
        }


    });    

}

function probar_ruta(req,res){

    let ruta = req.body.ruta;

    console.log(ruta);

    const objPruta = new Pruta();

    objPruta.type = ruta.type;
    objPruta.properties = ruta.properties;
    objPruta.geometry = ruta.geometry;


    //res.status(200).send({message: "OK", ruta: ruta});


    objPruta.save((err, PrutaStored) => {
        if (err) {
            res.status(500).send({message: "Error al almacenar", error:err});
        } else {
            if (PrutaStored) {

                

                Servicios.find({ location: { $geoWithin: { $geometry: PrutaStored.geometry } } },(err,result) => {
                    if(err){
                        res.status(500).send({message: "Error en la peticion"});
                    }else{
                        console.log('VAL',typeof(result));
                        if(!result){
                            console.log('NO ENCONTRADO',typeof(result));
                            //objCust.valid = false;
                            res.status(404).send({message: "No existen usuarios cargados en la BD"});
                        }else{      
                            
                            let num_usuarios = 0;
                            for (let i = 0; i < result.length; i++) {
                                //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                                let lat = 0;
                                let long = 0;
                                lat = result[i].location.coordinates[1];
                                long = result[i].location.coordinates[0];;
                                result[i].location.coordinates[0] = lat;
                                result[i].location.coordinates[1] = long;
                                num_usuarios++;
                                
        
                            
                            
                            }
                            
                            for (let j = 0; j < PrutaStored.geometry.coordinates[0].length; j++) {
                                //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                                let lat = 0;
                                let long = 0;
                                lat = PrutaStored.geometry.coordinates[0][j][1];
                                console
                                long = PrutaStored.geometry.coordinates[0][j][0];
                                PrutaStored.geometry.coordinates[0][j][0] = lat;
                                PrutaStored.geometry.coordinates[0][j][1] = long;
                                
                            }

                            res.status(200).send({message: "Usuarios", ruta: PrutaStored, usuarios: result, num_usuarios:num_usuarios});                     
                        }
                    }
                });

            } else {
                res.status(500).send({message: "Error al almacenar"});
            }
        }
    });

}

function guardar_ruta(req,res){

    let ruta = req.body.ruta;

    console.log(req.body);
    //let form = req.body.form;
    let sruta = req.body.ruta.properties.ruta;
    let agencia = req.body.form.agencia;
    let sector = req.body.form.sector;
    let zona = req.body.zona;
    

    ruta.properties.agencia = agencia;
    ruta.properties.sector = sector;
    ruta.properties.zona = zona;



    console.log(ruta);
    //console.log(form);

    const objRuta = new Rutas();

    objRuta.type = ruta.type;
    objRuta.properties = ruta.properties;
    objRuta.geometry = ruta.geometry;

    console.log('AAAAAAAA: '+objRuta);


    //res.status(200).send({message: "OK", ruta: ruta});

    let filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector,'properties.ruta':sruta};
    console.log(filtro);
    
    Rutas.findOne(filtro,(err,result) => {
        if(err){
            res.status(200).send({message: "Error en la peticion"});
        }else{
            console.log('VAL',typeof(result));
            if(!result){

                // for (let j = 0; j < objRuta.geometry.coordinates[0].length; j++) {
                //     //Cambianos las coordenadas a latitud,longitud en vez de longitud,latitud que es como estan almacenadas
                //     let lat = 0;
                //     let long = 0;
                //     lat = objRuta.geometry.coordinates[0][j][1];
                //     console
                //     long = objRuta.geometry.coordinates[0][j][0];
                //     objRuta.geometry.coordinates[0][j][0] = lat;
                //     objRuta.geometry.coordinates[0][j][1] = long;
                    
                // }
                //Guardar
                objRuta.save((err, rutaStored) => {
                    if (err) {
                        res.status(200).send({message: "Error al almacenar la ruta", error: err, estado: 0});
                    } else {
                        if (rutaStored) {
                      
                            res.status(200).send({message: "Ruta Almacenada.", ruta: rutaStored, estado: 1});
            
                        } else {
                            res.status(200).send({message: "Error al almacenar la ruta", estado: 0});
                        }
                    }
                });

            }else{

                res.status(200).send({message: "La ruta ya existe en el sistema.", estado: 0});

            }
        }


    });




}

function eliminar_ruta(req,res){

    let zona = req.body.zona;
    let agencia = req.body.form.agencia;
    let sector = req.body.form.sector;
    let ruta = req.body.form.ruta;

    let filtro = {};

    if(ruta !== "A"){
        filtro = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector,'properties.ruta':ruta};
    }

    let filtro_rutas = {'properties.zona':zona,'properties.agencia':agencia,'properties.sector':sector};

    

	Rutas.deleteOne(filtro,(err,result) => {
		if(err){
			res.status(200).send({message: "Error al borrar la ruta" + ruta});
		}else{
            Rutas.find(filtro_rutas,'properties',{sort:{'properties.ruta': 1}},(err,result) => {
                if(err){
                    res.status(200).send({message: "Error en la peticion"});
                }else{
                    console.log('VAL',typeof(result));
                    if(!result){
                        console.log('NO ENCONTRADO',typeof(result));
                        //objCust.valid = false;
                        res.status(200).send({message: "No hay rutas!"});
                    }else{
        
                        console.log('SI ENCONTRADO',typeof(result));
                        res.status(200).send({message: "Ruta eliminada -> " + ruta, rutas: result});
                        //objCust.valid = true;
        
                    }
                }
        
        
            });
            //res.status(200).send({message: "Ruta eliminada -> " + ruta});
			console.log('VAL',typeof(result));
		}


	});
}

module.exports = { 
    
	valida,
    prueba,
    poligonos_agencias,
    poligono_agencia,
    poligonos_agencias_geojson,
    servicios_agencia,
    poligonos_sectores_agencia,
    cat_agencias,
    cat_sectores,
    cat_rutas,
    poligono_sector,
    poligono_ruta,
    calcular_usuarios,
    traer_usuarios,
    guardar_ruta,
    probar_ruta,
    eliminar_ruta,
    trae_divisiones,
    trae_usuarios,
    trae_zonas,
    trae_procesos,
    guarda_usuarios,



};