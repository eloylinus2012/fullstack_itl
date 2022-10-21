var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var usuarioRouter = require('./routes/usuario');
var alumnoRouter = require('./routes/alumno');
var carreraRouter = require('./routes/carrera');

var cors = require('cors');
var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//YO
app.use('/usuarios', usuarioRouter);
app.use('/', alumnoRouter);
app.use('/', carreraRouter);
//app.use('/valida', usuarioRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb://216.250.119.27:3300/test', { useNewUrlParser: true }, (err,res) =>{
	if(err){
		throw err;
	}else{
    console.log('La conexion a la base de datos esta corriendo correctamente');
    
	}
});

module.exports = app;
