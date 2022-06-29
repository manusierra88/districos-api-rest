
const {Router}= require('express');
const { clientPost, clientGet } = require('../controllers/client');



const router = Router();

router.post('/', clientPost);

router.get('/', clientGet);





module.exports = router;