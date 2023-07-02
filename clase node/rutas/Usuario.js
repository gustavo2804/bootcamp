const express = require("express");
const {Guardar, Mostrar} = require("../controlador/UsuarioControlador");
const api = express.Router();
api.get("/", Guardar);
api.get("/", Mostrar);

module.exports = api