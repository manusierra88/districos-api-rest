
const bcrypt = require('bcryptjs');
const { request, response } = require('express');
const User = require('../models/user');


const userPost = async (req = request, res = response) => {
    const { nombre, email, password, rol } = req.body;
    

    const user = new User({nombre, email,password, rol})

    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt);
    

    await user.save();

    res.status(201).json(user);

}




module.exports = {
    userPost,
}