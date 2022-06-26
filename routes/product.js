const {Router}= require('express');
const { postProduct, putProducto } = require('../controllers/product');


const router = Router();

router.post('/',postProduct);

router.put('/:id',putProducto);



module.exports = router