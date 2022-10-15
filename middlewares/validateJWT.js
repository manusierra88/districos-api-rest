const { request } = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


const validateJWT = async(req=request, res, next)=>{
    const token = req.header('token');
    if(!token){
        res.status(400).json({
            msg:'No hay token el la peticion'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        const user = await User.findById(decoded.uid);

        req.user= user;
        next();
    } catch (error) {
        console.log(error);
         return res.status(401).json({
            ok:false,
            msg:'Token no valido'
        })
    }
}

module.exports = validateJWT