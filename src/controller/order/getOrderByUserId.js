const Order = require('../../models/Order');
const User = require('../../models/user');
const HttpError = require('../../models/http-error')
const mongoose = require('mongoose');

const getOrdersByUserId = async (req,res,next) => {
    const userId = req.params.uid;

    let orders;
    //let userWithPlaces
    try {
        const filter = {userID:userId};
        orders = await Order.find(filter);
        //userWithPlaces = User.findById(userId).populate('places');
    }catch (err) {
        const error = new HttpError(
            'Something went wrong, Could not find a place',
            500
        );
        return next(error)
    } 
    
    if (!orders || orders.length === 0) {
        return next(new HttpError('Could not find a place for the provided user id.',404));
    }

    // if (!userWithPlaces || userWithPlaces.places.length === 0) {
    //     return next(new HttpError('Could not find a place for the provided user id.',404));
    // }
    // res.json({places: userWithPlaces.places.map(place => place.toObject({getters : true}))});

    res.json({orders: orders.map(order => order.toObject({getters : true}))}); // => {place} => {place:place} js make it automaticaly if key and value const have the same value
}

exports.getOrdersByUserId = getOrdersByUserId
