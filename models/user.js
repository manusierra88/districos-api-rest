const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es un campo obligatorio']
    },
    email:{
        type: String,
        required:[true, 'El email es un campo obligatorio'],
        
    },
    password:{
        type: String,
        required:[true,'La contraseña es obligatoria']
    },
    rol:{
        type: String,
        required: true,
        default: 'USER_ROL',
        enum:['ADMIN_ROL', 'USER_ROL']
    },
    estado:{
        type: Boolean,
        default: true
    },
    
})

UserSchema.methods.toJSON = function(){
    const {__v,_id, password, ...user} =this.toObject();
    user.uid = _id;
    return user;
}


module.exports = model('User', UserSchema)