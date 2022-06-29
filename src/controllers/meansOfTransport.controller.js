//Obtener todos los transportes
//Obtener un transporte determinado
//Agregar nuevo transporte
//
//Modificar un transporte


// PROBAR TODO

const req = require('express/lib/request')
const { Pool } = require('pg')
const config = require('../../config')
const pool = new Pool(config.db);

const getMeanOfTransport = async(req, res) => {
    const response = await pool.query('select * from transporte')
    res.status(200).json(response.rows);
};

const getMeanOfTransportById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from transporte where id = $1', [id])
    res.json(response.rows);
};

const createMeanOfTransportById = async(req, res) => {
    console.log(req.body);
    const activo = true
    const {capacidad, empresa, localidad} = req.body
    const response = await pool.query('insert into transporte (capacidad, empresa, localidad, activo) values ($1,$2,$3,$4)',
    [capacidad, empresa, localidad, activo])
    console.log(response);
    res.json({
        message: 'Mean of transport Added Succesfully' ,
        body:{
        MeansOfTransport:{id, capacidad, empresa, localidad, activo}}
    })
};

const deleteMeanOfTransportById = async (req, res) => {

};

const updateMeanOfTransport = async(req, res) => {
    const {id, capacidad, empresa, localidad, activo} = req.body
    console.log('id', id);
    const response = await pool.query('update transporte set capacidad = $2, empresa = $3, localidad = $4, activo = $5 where id = $1',
    [capacidad, empresa, localidad, activo])
    console.log(response);
    res.json(`Mean of transoport ${id} update successfully`);
};


module.exports = {
    getMeanOfTransport,
    getMeanOfTransportById,
    createMeanOfTransportById,
    updateMeanOfTransport
};