const {Router} = require('express');
const{cartPost, getCarts, getCartbyId}= require('../controllers/cart');
const router = Router();
const validateJWT = require('../middlewares/validateJWT');
const validarCampos = require('../middlewares/validarCampos');
const isAdmin= require('../middlewares/validateAdminRole');
const validateOwnerOrAdmin = require('../middlewares/validateOwnerOrAdmin');


//get users carts- private route for admin only
router.get('/',[validateJWT,isAdmin,validarCampos],getCarts);

//get cart by id- private route for user/admin
router.get('/:uid',[validateJWT,validateOwnerOrAdmin,validarCampos],getCartbyId);

//post cart- private route for the user
router.post('/')



module.exports = router;