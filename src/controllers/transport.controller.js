
const req = require('express/lib/request')
const { Pool } = require('pg')
const config = require('../../config')
const pool = new Pool(config.db);

const getTransport = async(req, res) => {
    const response = await pool.query('select * from transporte')
    res.status(200).json(response.rows);
};

const getTransportById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from transporte where id = $1', [id])
    res.json(response.rows);
};

//anda 
const createTransportById = async(req, res) => {
    console.log(req.body);
    const activo = true
    const {capacidad, empresa, localidad} = req.body
    const response = await pool.query('insert into transporte (capacidad, empresa, localidad, activo) values ($1,$2,$3,$4)',
    [capacidad, empresa, localidad, activo])
    console.log(response);
    res.json({
        message: 'Transport successfully added' ,
        body:{
        MeansOfTransport:{capacidad, empresa, localidad, activo}}
    })
};

//anda
const deleteTransport = async (req, res) => {
    //anda , falta agregarle que diga si ya esta en falso que no se puede hacer. 
    const id = req.params.id;
    console.log('id', id);
    const response = await pool.query('update transporte set activo = false where id = $1', [id])
    console.log(response);
    res.json(`Transport ${id} successfully deleted`); 
};

//anda
const updateTransport = async(req, res) => {
    const {id, capacidad, empresa, localidad, activo} = req.body
    console.log('id', id);
    const response = await pool.query('update transporte set capacidad = $2, empresa = $3, localidad = $4, activo = $5 where id = $1',
    [id, capacidad, empresa, localidad, activo])
    console.log(response);
    res.json(`Transport ${id} successfully update`);
};


module.exports = {
    getTransport,
    getTransportById,
    createTransportById,
    deleteTransport,
    updateTransport
};