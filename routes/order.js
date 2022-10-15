const {Router}= require('express');

const {check}= require('express-validator');
const { orderCreate, orderGet, orderGetbyId, postOrder, getOrders, getOrderByID, putOrder, deleteOrder } = require('../controllers/order');
const validarCampos = require('../middlewares/validarCampos');
const isAdmin = require('../middlewares/validateAdminRole');

const validateJWT= require('../middlewares/validateJWT');
const router = Router();


// router.post('/',orderCreate);

// router.get('/', orderGet);

// router.get('/:id',orderGetbyId)
router.post('/',validateJWT, postOrder)

//private route for admin to check all the orders from clients
router.get('/',[validateJWT,isAdmin, validarCampos], getOrders)

//private route for admin and the order owner
router.get('/:id',[validateJWT,validarCampos] ,getOrderByID)

//private route for admin and order owner
router.put('/:id',[validateJWT,validarCampos],putOrder)

//private route for admin
router.delete('/:id',[validateJWT,validarCampos],deleteOrder)


module.exports = router

