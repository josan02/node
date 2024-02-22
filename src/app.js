console.log("hola");

// const express = require('express'); 
import  express  from 'express';
import ejs from 'ejs';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from './routes/routes.js'
import { PORT } from './config.js';

// poner siempre type module
const app = express();

//configurar aplicacion recibir json
app.use(express.json());

// configurar el dirname
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);


//configurar motor de plantilla
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
//configuracion de indexroutes
app.use(indexRoutes);

//definir la ruta de la carpeta estatica
app.use(express.static(join(__dirname, 'public')));


app.listen(PORT);
console.log('escuchando en el puerto', PORT);