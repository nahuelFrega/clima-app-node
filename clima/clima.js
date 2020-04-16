const axios = require('axios');

const getClima = async(lat, lon) => {

    // Consume directamente la API. Se hace así ya que no requiere headers
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=5093054ba62c167d54971a1afd530608&units=metric`);

    let temp = resp.data.main.temp;

    return temp;

}

module.exports = {
    getClima
}