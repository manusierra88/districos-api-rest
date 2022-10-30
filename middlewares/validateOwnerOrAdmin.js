const { request, response } = require("express")


const validateOwnerOrAdmin = async (req=request, res=response, next)=>{

    const isOwner = req.params.id;

    const reqRol = req.params.rol;

    if(!isOwner===req.user.uid|!reqRol==='ADMIN_ROL'){

        return res.status(400).json({
            ok:false,
            msg:'User without permission for this request/Invalid rol for this request'
        })
    }
    next();

}


module.exports= validateOwnerOrAdmin;