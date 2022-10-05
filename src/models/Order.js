const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    userID : {type: mongoose.Types.ObjectId, required:true, ref: 'Usuario'},
    fecha : {type: Date, required:true},
    estado : {type: String, required: true},
    largo : {type: Number, required: true},
    ancho : {type: Number, required: true},
    alto : {type: Number, required: true},
    peso : {type: Number, required: true},
    direccion_recogida : {type: String, required: true},
    ciudad_recogida : {type: String, required: true},
    nombre_destinatario : {type: String, required: true},
    cedula : {type: String, required: true},
    direccion_entrega : {type: String, required: true},
    ciudad_entrega : {type: String, required: true},
})


module.exports = mongoose.model('Ordene',orderSchema);