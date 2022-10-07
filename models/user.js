const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es un campo obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es un campo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROL',
        enum: ['ADMIN_ROL', 'USER_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    cart:{
        type:Schema.Types.ObjectId,
        ref: 'Cart'
    },
    order: [{
        orderID: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }

    }
    ],
    address:{
        type : String,
        required: [true, 'Debe ingresar una dirección']
    },
    phone:{
        type: String,
        required:[true, 'Ingrese su número de teléfono']
    }

})

UserSchema.methods.toJSON = function () {
    const { __v, _id, password, ...user } = this.toObject();
    user.uid = _id;
    return user;
}


module.exports = model('User', UserSchema)