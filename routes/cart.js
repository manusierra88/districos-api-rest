const {Router} = require('express');
const{cartPost}= require('../controllers/cart');
const router = Router();

router.post('/',cartPost);



module.exports = router;