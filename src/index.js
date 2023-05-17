const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { mongoose } = require('./database');
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev')); // Ver las peticiones que llegan al servidor
app.use(express.json()); // Entender los datos que llegan desde un formulario HTML o desde un cliente REST (JSON) y convertirlos en un objeto de JavaScript para poder manipularlos en el servidor (req.body) 
// Routes