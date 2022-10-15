const {response} = require('express');


const isAdmin = async(req, res = response, next) =>{
    const rol = req.user.rol;

    if(rol !== 'ADMIN_ROL'){
        return res.status(404).json({
            ok:false,
            msg:'User without clerance to this request'
        })
    }

    next();
}


module.exports = isAdmin;