const { Router } = require('express');
const { getMeanOfTransport, getMeanOfTransportById, createMeanOfTransportById, updateMeanOfTransport } = require('../controllers/meansOfTransport.controller');
const router = Router()

router.get('/meanOfTransport', getMeanOfTransport)
router.get('/meanOfTransport/:id', getMeanOfTransportById)
router.post('/meanOfTransport', createMeanOfTransportById)
//router.delete
router.put('meanOfTransport', updateMeanOfTransport)

module.exports = router;