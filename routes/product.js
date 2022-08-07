const {Router}= require('express');
const { postProduct, putProducto, getProduct } = require('../controllers/product');


const router = Router();

router.post('/',postProduct);

router.put('/:id',putProducto);

router.get('/', getProduct);



module.exports = router