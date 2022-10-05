const Order = require('../../models/Order');
const User = require('../../models/user');
const HttpError = require('../../models/http-error')
const mongoose = require('mongoose');

const createOrder = async (req,res,next) => {

    const {
        userID,
        fecha,
        largo,
        ancho,
        alto,
        peso,
        direccion_recogida,
        ciudad_recogida,
        nombre_destinatario,
        cedula,
        direccion_entrega,
        ciudad_entrega
    } = req.body;
    
    
    const createdOrder = new Order({
        userID,
        fecha,
        estado: 'Guardado',
        largo,
        ancho,
        alto,
        peso,
        direccion_recogida,
        ciudad_recogida,
        nombre_destinatario,
        cedula,
        direccion_entrega,
        ciudad_entrega
    });

    let user;

    try {
        user = await User.findById(userID);
    } catch (err) {
        const error = new HttpError(
            'No se pudo crear la orden',
            500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError('No se pudo encontrar el usuario',404);
        return next(error);
    }
    console.log(user);

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdOrder.save({session : sess});
        user.ordenes.push(createdOrder);
        await user.save({session :sess})
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(
          'Creating place failed, please try again.',
          500  
        )
        return next(error);
    }
    

    res.status(201).json({orden:createdOrder})
};

exports.createOrder = createOrder;