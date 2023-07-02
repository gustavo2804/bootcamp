const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true

    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    birthdate:{
        type:Date,
        required: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);