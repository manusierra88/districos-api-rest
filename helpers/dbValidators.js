const Rol = require('../models/rol');
const User =require('../models/user');


const registredEmail = async (email = '')=>{

    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error('El correo ya se encuntra registrado y/o en uso');
    }

}

const validRol = async (rol= '') =>{
    const rolExist = await Rol.findOne({rol});
    if(!rolExist){
        throw new Error('El rol no se encutra en BD');
    }
}




module.exports = {
    registredEmail,
    validRol,
}