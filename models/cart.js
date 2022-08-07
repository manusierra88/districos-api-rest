const {Schema, model} = require('mongoose');


const cartSchema = Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products:[{
        productID:{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        name:{
            type: String,
        },
        quantity:{
            type: Number,
            default: 1,
            min: 1
        },
        price:{
            type: Number
        }
    }],
    total:{
        type:Number,
        default:0
    }
},
{timestapms:true}
)

module.exports = model('Cart', cartSchema)