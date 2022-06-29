const { Schema, model } = require('mongoose');


const ClientSchema = Schema({
    name: {
        type: String,   
    },
    company:{
        type: String,
        required: [true, 'Ingrese el nombre de la empresa' ]
    },
    companyPhone:{
        type: Number
    },
    companyAdress:{
        type:String
    },
    orders:[{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]

})


module.exports = model('Client', ClientSchema)