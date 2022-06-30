
const {Router}= require('express');
const { clientPost, clientGet } = require('../controllers/client');

const validarCampos= require('../middlewares/validarCampos');
const {check}= require('express-validator');
const validateJWT= require('../middlewares/validateJWT');





const router = Router();

router.post('/',[validateJWT, validarCampos], clientPost);

router.get('/',clientGet);





module.exports = router;