const jwt = require('jsonwebtoken');


const generateJWT = (uid= '')=>{
    return new Promise ((resolve, reject)=>{
        const payload = {uid};
        jwt.sign(payload,process.env.TOKEN_KEY, {expiresIn:'180 d'},
        (error, token)=>{
            if(error){
                reject('no se puede crear token')
            }else{
                resolve(token);
            }
        })
    })
    
}

module.exports ={
    generateJWT
}