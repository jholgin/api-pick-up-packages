const Order = require('../../models/Order');
const HttpError = require('../../models/http-error')


const getOrderById = async (req,res,next) => {
    const orderId = req.params.orderId;
    let order;
    try {
        order = await Order.findById(orderId);
    }catch (err) {
        const error = new HttpError(
            'No se pudo completar su solicitud',
            500
        );
        return next(error);
    }

    if (!order) {
        const error = new HttpError(
            'No se encontro una orden con el id ingresado',
            404
        );
        return next(error);
    }

    res.json({order:order.toObject( {getters: true} )});

}

exports.getOrderById = getOrderById;