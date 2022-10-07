const {response} = require('express');


const isAdmin = async(req, res = response, next) =>{
    const rol = req.user;

    if(rol !== 'ADMIN_ROL'){
        return res.status(404).json({
            ok:false,
            msg:'User without clerane to this request'
        })
    }

    next();
}


module.exports = isAdmin;