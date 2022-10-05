const User = require('../../models/user');
const HttpError = require('../../models/http-error')

const getUsers = async (rec,res,next) => {
    let users;

    try {
        users = await User.find({}, '-contrasena');
    } catch (err) {
        const error =  new HttpError('No se pudo buscar usuarios',500);
        return next(error);
    }

    res.json({users: users.map(user => user.toObject({getters:true}))});
};


exports.getUsers = getUsers;