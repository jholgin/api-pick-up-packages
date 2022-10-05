const User = require('../../models/user');
const HttpError = require('../../models/http-error')


const createUser = async (req,res,next) => {
    const {nombres,usuario,correo,contrasena} = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({correo : correo});
    } catch (err) {
        const error = new HttpError(
            'Crear usuario falllo',
            500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            'El usuario ya existe',
            422
        );
        return next(error);
    }

    const createdUser = new User({
        nombres,
        usuario,
        correo,
        contrasena,
        ordenes: []
    });

    try {
        await createdUser.save();
    }catch (err) {
        const error = new HttpError(
            'No se pudo crear usuario',
            500
        );
        return next(error)
    }

    res.status(201).json({user:createdUser.toObject({getters:true})});
}

exports.createUser = createUser;