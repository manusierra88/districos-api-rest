const {Schema, model} = require('mongoose');

const RolSchema = Schema({
    rol:{
        type: String,
        
    }
})


module.exports = model('Rol', RolSchema);