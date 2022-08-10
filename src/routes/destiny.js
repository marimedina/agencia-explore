const {Router} = require('express');
const router = Router();
const {getDestiny, getDestinyById, createDestiny, deleteDestiny, updateDestiny} = require('../controllers/destiny.controller')

//ver aca porque rutas diferentes

router.get('/destiny', getDestiny);
router.get('/destiny/:id',getDestinyById);
router.post('/destiny',createDestiny);
router.delete('/destiny/:id', deleteDestiny);
router.put('/destiny', updateDestiny);

module.exports = router;