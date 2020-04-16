const axios = require('axios');


const getCoordenadas = async(dir) => {

    // Para convertir las direcciones New York -> New+York
    const encodedUrl = encodeURI(dir);

    // Consume la API 'City Geo-Location' utilizando 'axios'
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com' },
        headers: { 'X-RapidAPI-Key': 'TSMDX7k7ZOmshnuY4OOtTIj7Hhgbp1FKAXCjsnTkK6nqa41jRf' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getCoordenadas
}