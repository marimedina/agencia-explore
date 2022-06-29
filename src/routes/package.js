const { Router } = require('express');
const { getPackage, getPackageById, createPackage, deletePackage, updatePackage } = require('../controllers/package.controller');
const router = Router()

router.get('/package', getPackage);
router.get('/package/:id', getPackageById);
router.post('/package', createPackage);
router.delete('/package/:id', deletePackage);
router.put('/package', updatePackage);

module.exports = router;