const { Router } = require('express');
const { getLocation, createLocation } = require('../controllers/location.controller');
const router = Router()

router.get('/location', getLocation)
router.post('/location', createLocation)