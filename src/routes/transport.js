const { Router } = require('express');
const { getTransport, getTransportById, createTransportById, deleteTransport, updateTransport } = require('../controllers/transport.controller');
const router = Router()

router.get('/meanOfTransport', getTransport)
router.get('/meanOfTransport/:id', getTransportById)
router.post('/meanOfTransport', createTransportById)
router.delete('/meanOfTransport/:id',deleteTransport)
router.put('/meanOfTransport', updateTransport)

module.exports = router;