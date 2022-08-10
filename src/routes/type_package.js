const { Router } = require('express');
const router = Router();

const { getType_pac, getType_pacById } = require('../controllers/type_package.controller')

router.get('/type', getType_pac);
router.get('/type:id', getType_pacById);

module.exports = router;