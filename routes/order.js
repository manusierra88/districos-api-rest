const {Router}= require('express');

const {check}= require('express-validator');
const { orderCreate, orderGet, orderGetbyId } = require('../controllers/order');


const router = Router();


router.post('/',orderCreate);

router.get('/', orderGet);

router.get('/:id',orderGetbyId)



module.exports = router