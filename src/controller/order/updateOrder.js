const Order = require('../../models/Order');
const User = require('../../models/user');
const HttpError = require('../../models/http-error')
const mongoose = require('mongoose');

const updateOrder =async (req,res,next) => {

    const orderId = req.params.orderId;

    const {
        fecha,
        estado,
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

    let order;
    try {
        order = await  Order.findById(orderId);
    } catch (err) {
        const error = new HttpError(
            'Algo salio mal demasiado mal',
            500
        );
        return next(error);
    } 

    if (!order) {
        return next(new HttpError('No se encontro la orden',404));
    }

    order.fecha = fecha;
    order.estado = estado;
    order.largo = largo;
    order.ancho = ancho;
    order.alto = alto;
    order.peso = peso;
    order.direccion_recogida = direccion_recogida;
    order.ciudad_recogida = ciudad_recogida;
    order.nombre_destinatario = nombre_destinatario;
    order.cedula = cedula;
    order.direccion_entrega = direccion_entrega;
    order.ciudad_entrega = ciudad_entrega;

    try {
        await order.save();
    }catch (err) {
        const error = new HttpError(
            'Algo salio mal',
            500
        );
        return next(error)
    }


    res.status(200).json({order:order.toObject({getters:true})});

}


exports.updateOrder = updateOrder;