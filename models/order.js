const { Schema, model } = require('mongoose');


const OrderSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        productID: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        name: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1
        },

    }],
    bill: {
        type: Number,
        default: 0,

    }

},
    { timestamps: true }
)

module.exports = model('Order', OrderSchema)