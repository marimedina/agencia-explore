const express = require('express');
const app = express()

const package = require('./routes/package')
const meanOfTransport = require('./routes/meanOfTransport')
const location = require('./routes/location')

//Middlewares ---- Se deben entender datos json o de formularios de html, por lo que debemos definir la configuracion
// Se ejecutan antes que las rutas, para entender los datos
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
//app.use('/package', package);
//app.use('/meanOfTransport', meanOfTransport);
app.use('/location', location);

app.listen(3000)
console.log('Servidor en puerto 3000');

//Correr con npm run dev