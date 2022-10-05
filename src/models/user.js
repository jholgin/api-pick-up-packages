const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    nombres: {type: String, required: true},
    usuario: {type: String, required: true, unique : true},
    contrasena: {type: String, required: true, minlength : 6},
    correo: {type: String, required: true,unique : true},
    ordenes: [{type: mongoose.Types.ObjectId, required:true, ref: 'Ordene'}]
});


userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Usuario',userSchema);

