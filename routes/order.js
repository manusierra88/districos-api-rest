const {Router}= require('express');

const {check}= require('express-validator');
const { orderCreate, orderGet, orderGetbyId, postOrder } = require('../controllers/order');


const router = Router();


// router.post('/',orderCreate);

// router.get('/', orderGet);

// router.get('/:id',orderGetbyId)
router.post('/', postOrder)


module.exports = router

