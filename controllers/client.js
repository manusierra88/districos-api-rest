const { response, request } = require('express');
const Client = require('../models/client');


const clientPost = async(req=reques, res=response)=>{
    const {name, company, companyPhone, companyAdress} = req.body;

    if(!company){
        return res.status(400).json({
            ok:false,
            msg:'Incluya el nombre de la compañia para poder guardarla en base de datos'
        })
    }

    const data = {name, company, companyAdress,companyPhone};

    const client = new Client(data);
    
    await client.save();

    res.status(201).json({
        ok:true,
        client
    })


}

const clientGet = async(req=request, res=response)=>{
    const [clients]= await Promise.all([
        Client.find({}).populate('orders')
    ])

    res.status(200).json({
        ok:true,
        clients,
    })
}



module.exports={
    clientPost,
    clientGet,
}