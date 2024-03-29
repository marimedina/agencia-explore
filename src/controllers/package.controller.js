
const req = require('express/lib/request')
const { Pool } = require('pg')
const config = require('../../config')
const pool = new Pool(config.db)

const getPackage = async(req, res) => {
    const response = await pool.query('select * from paquete')
    res.status(200).json(response.rows);
};

const getPackageById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from paquete where id = $1', [id])
    res.json(response.rows);
};


const createPackage = async(req, res) => {
    console.log(req.body);
    const activo = true;
    const {nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion} = req.body;
    const response = await pool.query('insert into paquete (nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    [nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo])
    console.log(response);
 
    res.json({
      message: 'Package successfully added' ,
      body:{
      package: {nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo}
  } 
})};


const deletePackage = async(req, res) => {
    //agregar para que no permita eliminar si el paquete ya esta desactivado
    const id = req.params.id;
    console.log('id', id);
    const response = await pool.query('update paquete set activo = false where id = $1', [id])
    console.log(response);
    res.json(`Package ${id} successfully deleted`);       

}; 


const updatePackage = async(req, res) => {
    const {id, nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo} = req.body;
    console.log('id', id);
    const response = await pool.query('update paquete set nombre = $2, precio = $3, comienzo = $4, fin = $5, salida = $6, descripcion = $7, cupos = $8, duracion = $9, activo = $10 where id = $1',
    [id, nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo])
    console.log(response);
    res.json(`Package ${id} successfully update`);
};

//se llama en el cliente cuando se crea el paquete y se le asigna el transporte 
const createTransportXpackage = async(req, res) => {
    const activo = true;
    const {idTransporte,idPaquete} = req.body;
    const response = await pool.query('insert into transporte_por_paquete (id_paquete, id_transporte,activo) values ($1,$2,$3)',
    [idPaquete,idTransporte, activo])
    console.log(response);
 
    res.json({
      message: 'Succesfully added' ,
      body:{
      package: {idTransporte,idPaquete}
  } 
})};

const createDestinyXpackage = async(req, res) => {
    const activo = true;
    const {idDestino,idPaquete} = req.body;
    const response = await pool.query('insert into destino_por_paquete (id_paquete, id_destino,activo) values ($1,$2,$3)',
    [idPaquete,idDestino, activo])
    console.log(response);
 
    res.json({
      message: 'Successfully added' ,
      body:{
      package: {idDestino,idPaquete}
  } 
})};

const createExcursionXpackage = async(req, res) => {
    const activo = true;
    const {idExcursion,idPaquete} = req.body;
    const response = await pool.query('insert into excursion_por_paquete (id_paquete, id_excursion,activo) values ($1,$2,$3)',
    [idPaquete,idExcursion, activo])
    console.log(response);
 
    res.json({
      message: 'Successfully added' ,
      body:{
      package: {idExcursion,idPaquete}
  } 
})};

const createHotelXpackage = async(req, res) => {
    const activo = true;
    const {idHotel,idPaquete} = req.body;
    const response = await pool.query('insert into hotel_por_paquete (id_paquete, id_hotel,activo) values ($1,$2,$3)',
    [idPaquete,idHotel, activo])
    console.log(response);
 
    res.json({
      message: 'Successfully added' ,
      body:{
      package: {idHotel,idPaquete}
  } 
})};

const createPlaceXexcursion = async(req, res) => {
    const activo = true;
    const {idExcursion,idLugar} = req.body;
    const response = await pool.query('insert into lugar_por_excursion (id_excursion, id_lugar,activo) values ($1,$2,$3)',
    [idExcursion,idLugar, activo])
    console.log(response);
 
    res.json({
      message: 'Successfully added' ,
      body:{
      package: {idExcursion,idLugar}
  } 
})};


module.exports = {
    getPackage,
    getPackageById,
    createPackage,
    deletePackage,
    updatePackage,
    createTransportXpackage,
    createDestinyXpackage,
    createExcursionXpackage,
    createHotelXpackage,
    createPlaceXexcursion,
};