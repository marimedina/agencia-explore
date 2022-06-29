//Obtener todos los lugares de las excursiones
//Agregar nuevo lugar


const req = require('express/lib/request')
const { Pool } = require('pg')
const config = require('../../config')
const pool = new Pool(config.db);

const getLocation = async(req, res) => {
    const response = await pool.query('select * from lugar')
    res.status(200).json(response.rows);
};

const createLocation = async(req, res) => {
    console.log(req.body);
    const activo = true
    const {nombre} = req.body
    const response = await pool.query('inserto into lugar (nombre, activo) values ($1, $2)', [nombre, activo])
    console.log(response);
    res.json({
        message: 'Location Added Succesfully' ,
        body:{
        location:{nombre, activo}}
    })
};

const deleteLocation = async (req, res) => {

};

const updateLocation = async (req, res) => {

};



module.exports = {
    getLocation, 
    createLocation
}