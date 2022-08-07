const {Router} = require('express');
const{cartPost}= require('../controllers/cart');
const router = Router();

router.get('/',cartPost);



module.exports = router;