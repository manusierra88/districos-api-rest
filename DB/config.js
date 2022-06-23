const mongoose = require('mongoose');


const dbConnect = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_CNN ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.log(error);
        throw new Error('error al conectar la DB');
        
    }

}


module.exports = {
    dbConnect
}