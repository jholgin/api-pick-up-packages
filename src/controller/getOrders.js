const MongoDb = require('mongodb')


const getOrders =  (req, res) => {
    res.send("Ordenes");
    const connection = MongoDb.getConnecion;
    MongoDb.prueba;
  }


exports.getOrders = getOrders;
