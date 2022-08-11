const {Router}= require('express');

const {check}= require('express-validator');
const { orderCreate, orderGet, orderGetbyId, postOrder, getOrders, getOrderByID, putOrder } = require('../controllers/order');
const validarCampos = require('../middlewares/validarCampos');

const validateJWT= require('../middlewares/validateJWT');
const router = Router();


// router.post('/',orderCreate);

// router.get('/', orderGet);

// router.get('/:id',orderGetbyId)
router.post('/',validateJWT, postOrder)

router.get('/', getOrders)

router.get('/:id',[validateJWT,validarCampos] ,getOrderByID)

router.put('/:id',[validateJWT,validarCampos],putOrder)


module.exports = router

