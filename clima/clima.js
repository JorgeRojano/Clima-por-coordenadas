const axios = require('axios');

const getClima = async (lat, long) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3b32d3659489abd68c46e903397fc9f7&units=metric&lang=es`);
    
    return res.data.main.temp
}

module.exports = {
    getClima
}