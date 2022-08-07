const {Router}= require('express');
const { postProduct, putProducto, getProduct, deleteProduct } = require('../controllers/product');


const router = Router();

router.post('/',postProduct);

router.put('/:id',putProducto);

router.get('/', getProduct);

router.delete('/:id', deleteProduct);



module.exports = router