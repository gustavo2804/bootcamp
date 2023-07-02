const express = require('express');
const app = express();
const UsuarioRuta = require('./rutas/Usuario')
const port = 3000;

app.get("/inicio", (req, res)=>{

res.send("hola soy gustavo");

});

app.listen(port, ()=>{

    console.log("Servidor Iniciado");
    
})

app.use("/guardar", UsuarioRuta);
app.use("/mostrar", UsuarioRuta);

module.exports = app;