const {Router}= require('express');

const {check}= require('express-validator');
const { orderCreate, orderGet } = require('../controllers/order');


const router = Router();


router.post('/',orderCreate);

router.get('/', orderGet);








module.exports = router