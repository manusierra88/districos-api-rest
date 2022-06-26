const bcryptjs = require('bcryptjs');
const { response } = require('express');

const {generateJWT} = require('../helpers/jwt-generator');

const User = require('../models/user');



const login = async(req, res=response)=>{
    const {email, password} = req.body

    try {
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({
                ok:false,
                msg:'El email no corresponde a un usuario registrado'
            })
        }
        if(user.estado===false){
            res.status(400).json({
                ok:false,
                msg:'El usuario no tiene permiso para ingresar al sitio'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            res.status(400).json({
                ok:false,
                msg:'Contraseña incorrecta'
            })
        }

        const token = await generateJWT(user._id)

        res.status(200).json({
            ok:true,
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
        
    }
}


module.exports= {
    login
}