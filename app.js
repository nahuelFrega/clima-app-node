// Requireds
const { getCoordenadas } = require('./coordenadas/coordenadas');
const { getClima } = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(dir) => {

    try {

        // PRIMERO: Obtiene las coordenadas a partir de la dirección
        const coord = await getCoordenadas(dir);
        // SEGUNDO: En base a las coordenadas devuelve el clima
        const temp = await getClima(coord.lat, coord.lon);

        return `El clima de ${ coord.direccion } es de ${ temp }`;

    } catch (e) {

        return `No se pudo determinar el clima para ${ dir }`;

    }

}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)