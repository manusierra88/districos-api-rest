const {Schema, model} = require('mongoose');


const OrderSchema = Schema({
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
    bill:{
        type: Number,
        default: 0,
        
    }
    
    
})

module.exports = model('Order', OrderSchema)