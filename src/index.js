const express = require('express');
const app = express()


const country = require('./routes/country');
const destiny = require('./routes/destiny');
const excursion = require('./routes/excursion');
const hotel = require('./routes/hotel');
const line = require ('./routes/line');
const location = require('./routes/location');
const package = require('./routes/package');
const promotion = require('./routes/promotion')
const roles = require('./routes/role');
const shopping_cart = require('./routes/shopping_cart')
const transport = require('./routes/transport');
const type_package = require('./routes/type_package');
//faltaria para tipo transporte
const users = require('./routes/user');


//Middlewares ---- Se deben entender datos json o de formularios de html, por lo que debemos definir la configuracion
// Se ejecutan antes que las rutas, para entender los datos
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/country', country);
app.use("/destiny", destiny);
app.use("/excursion", excursion);
app.use("/hotel", hotel);
app.use('/line', line);
app.use('/location', location);
app.use('/package', package);
app.use('/promotion', promotion);
app.use("/role", roles);
app.use('/shopping_cart', shopping_cart);
app.use('/transport', transport);
app.use("/type", type_package);
app.use("/user", users);



app.listen(3000)
console.log('Servidor en puerto 3000');

//Correr con npm run dev