const {Schema, model} = require('mongoose');


const ProductSchema = Schema({
    name:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    salePrice:{
        type:Number,
    },
    avialable:{
        type: Boolean,
        default: true,
    },
    stock:{
        type: Number,
        default: 1
    },
    purchase:{
        type: Date,
        default: Date.now()
    }
})


module.exports = model('Product', ProductSchema)