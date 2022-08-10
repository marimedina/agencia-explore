
const req = require('express/lib/request')
const { Pool } = require('pg')
const config = require('../../config')
const pool = new Pool(config.db);

//Obtener todos los lugares
const getLocation = async(req, res) => {
    const response = await pool.query('select * from lugar')
    res.status(200).json(response.rows);
};

//obtener un lugar por id
const getLocationById = async(req, res) => {
    const id = req.params.id
    const response = await pool.query('select * from lugar where id = $1',[id])
    res.json(response.rows);
};

//Agregar nuevo lugar
const createLocation = async(req, res) => {
    console.log(req.body);
    const activo = true
    const {nombre} = req.body
    const response = await pool.query('insert into lugar (nombre, activo) values ($1, $2)', [nombre, activo])
    console.log(response);
    res.json({
        message: 'Location succesfully added' ,
        body:{
        location:{nombre, activo}}
    })
};

//elimar lugar
const deleteLocation = async (req, res) => {
    //ver de que si esta en falso, de un aviso que ya esta en falso
    const id = req.params.id
    console.log('id', id);
    const response = await pool.query('update lugar set activo = false where id = $1', [id])
    console.log(response);
    res.json(`Location ${id} successfully deleted`); 
};

// se hace poniendo id en body
//modificar
const updateLocation = async (req, res) => {
    const {nombre, activo, id} = req.body
    console.log('id', id);
    const response = await pool.query('update lugar set nombre = $1, activo = $2 where id = $3', [nombre, activo, id])
    console.log(response);
    res.json(`Location ${id} successfully update`);
};



module.exports = {
    getLocation, 
    getLocationById,
    createLocation,
    deleteLocation,
    updateLocation
}