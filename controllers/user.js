
const bcrypt = require('bcryptjs');
const { request, response } = require('express');
const { $where } = require('../models/user');
const User = require('../models/user');


const userPost = async (req = request, res = response) => {
    const { nombre, email, password, rol } = req.body;


    const user = new User({ nombre, email, password, rol })

    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt);


    await user.save();

    res.status(201).json(user);

}

const getUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({
        ok: true,
        users
    })
}

const getUserByID = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById( id );
    try {
        if (!user) {
            res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado en la DB'
            })
        }
        res.status(200).json({
            ok: true,
            user
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            error
        })
    }

}

const putUser = async (req, res) =>{
    const user = req.user;
    const id = req.params.id;
    const {...data} = req.body;
    
    const userResquest = await User.findById(id);

    if(user !== userResquest){
        res.status(404).json({
            ok:false,
            msg:'Usuario sin autorizacion para ralizar dicha operacion'
        });
    };

    const updatedUser = await User.findByIdAndUpdate(id,{...data}, {new:true})

}
//private route with JWT to get the user from the request.



module.exports = {
    userPost,
    getUsers,
    getUserByID,
    putUser
}