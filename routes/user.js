const { Router } = require('express');
const { userPost, getUsers, getUserByID, putUser } = require('../controllers/user');
const { check } = require('express-validator');
const { registredEmail } = require('../helpers/dbValidators');
const validarCampos = require('../middlewares/validarCampos');
const validateJWT = require('../middlewares/validateJWT');
const isAdmin = require('../middlewares/validateAdminRole');


const router = Router();



router.post('/', [
    check('nombre', 'El nombre debe ser ingresado').not().isEmpty(),
    check('email').isEmail(),
    check('email').custom(registredEmail),
    check('password', 'La contraseña debe contener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos], userPost);


router.get('/',[validateJWT,isAdmin,validarCampos], getUsers);

router.get('/:id', getUserByID);

router.put('/:id',[validateJWT,validarCampos],putUser)



module.exports = router
