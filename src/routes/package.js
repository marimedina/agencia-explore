const { Router } = require('express');
const { getPackage, getPackageById, createPackage, deletePackage, updatePackage, createTransportXpackage, createDestinyXpackage, createExcursionXpackage, createHotelXpackage, createPlaceXexcursion } = require('../controllers/package.controller');
const router = Router()

router.get('/package', getPackage);
router.get('/package/:id', getPackageById);
router.post('/package', createPackage);
router.delete('/package/:id', deletePackage);
router.put('/package', updatePackage);
router.post('/transportxpackage', createTransportXpackage);
router.post('/destinoxpackage', createDestinyXpackage);
router.post('/excursionxpackage', createExcursionXpackage);
router.post('/hotelxpackage', createHotelXpackage);
router.post('/Placexexcursion', createPlaceXexcursion);

module.exports = router;