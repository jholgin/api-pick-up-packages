const Order = require('../../models/Order');
const HttpError = require('../../models/http-error')

const getOrders = async (rec,res,next) => {
    let orders;

    try {
        orders = await Order.find();
    } catch (err) {
        const error =  new HttpError('No se pudo buscar ordenes',500);
        return next(error);
    }

    res.json({users: orders.map(user => user.toObject({getters:true}))});
};


exports.getOrders = getOrders;