
//Obtener todos los paquetes
//Obtener un paquete determinado
//Agregar nuevo paquete
//
//Modificar un paquete


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

//FALTA PROBAR TODO

const createPackage = async(req, res) => {
    console.log(req.body);
    const activo = true;
    const {nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion} = req.body;
    const response = await pool.query('insert into paquete (nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    [nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo])
    console.log(response);
 
    res.json({
      message: 'Package Added Succesfully' ,
      body:{
      package: {id, nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo}
       //ver si esta bien que el id vaya aca arriba
  } 
})};

const deletePackage = async(req, res) => {
    
}; 

const updatePackage = async(req, res) => {
    const {id, nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo} = req.body;
    console.log('id', id);
    const response = await pool.query('update paquete set nombre = $2, precio = $3, comienzo = $4, fin = $5, salida = $6, descripcion = $7, cupos = $8, duracion = $9, activo = $10 where id = $1',
    [nombre, precio, comienzo, fin, salida, descripcion, cupos, duracion, activo])
    console.log(response);
    res.json(`Package ${id} update successfully`);
};


module.exports = {
    getPackage,
    getPackageById,
    createPackage,
    updatePackage
};