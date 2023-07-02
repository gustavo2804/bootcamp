
async function Guardar (req, res){

    console.log("usuario guardado");
    res.send("usuario guardado");

}

async function Mostrar (req, res){
    var datos = await fetch('http://api.escuelasjs.con/api/v1/products');
    const leer = await datos.json();
    console.log("usuario mostrado");
    res.send("Enviar datos", leer);

}

module.exports = {
    Guardar: Guardar,
    datos: Mostrar
};