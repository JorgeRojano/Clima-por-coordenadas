const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require ('./config/yargs').argv;

//console.log(argv.direccion);
//argv.direccion

//console.log(encodeURL);







const getInfo = async (direccion) => {
    
    
    try{
        const coords = await lugar.getLugarLetLng(direccion);
        const temp = await clima.getClima(coords.lat,coords.long);
        return `El clima de ${coords.direccion} es ${temp}.`
    }catch (e){
        return `No se pudo obtener el clima de ${direccion}`;
    }
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)