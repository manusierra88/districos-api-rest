const {Router} = require('express');
const { userPost } = require('../controllers/user');
const {check} = require('express-validator');
const { registredEmail } = require('../helpers/dbValidators');
const validarCampos = require('../middlewares/validarCampos');


const router = Router();



router.post('/',[
    check('nombre','El nombre debe ser ingresado').not().isEmpty(),
    check('email').isEmail(),
    check('email').custom(registredEmail),
    check('password','La contraseña debe contener al menos 6 caracteres').isLength({min:6}),
    validarCampos],userPost);



module.exports = router
