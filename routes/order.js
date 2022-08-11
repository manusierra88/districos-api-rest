const {Router}= require('express');

const {check}= require('express-validator');
const { orderCreate, orderGet, orderGetbyId, postOrder, getOrders } = require('../controllers/order');
const validarCampos = require('../middlewares/validarCampos');

const validateJWT= require('../middlewares/validateJWT');
const router = Router();


// router.post('/',orderCreate);

// router.get('/', orderGet);

// router.get('/:id',orderGetbyId)
router.post('/',validateJWT, postOrder)

router.get('/', getOrders)


module.exports = router

