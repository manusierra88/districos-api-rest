const express = require('express');
const {dbConnect} = require('../DB/config');



class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        //path
        this.authPath = '/api/auth';
        this.userPath = '/api/user';


        //middlewares
        this.middlewares()

        //DB connection
        this.connectDB()

        //routes
        this.routes()
    }
    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    async connectDB(){
        await dbConnect()
    }

    routes(){
        this.app.use(this.userPath, require('../routes/user'))
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log('server running on port'+ this.port)
        })
    }
}

module.exports = Server;