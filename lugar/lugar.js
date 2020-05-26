const axios = require('axios');

const getLugarLetLng = async (dir) => {
    
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
      headers: {'x-rapidapi-key': '9dbcd6c9dcmshe6be17278797709p142a47jsna787ece6fff9'}
    });
    
    const res = await instance.get();
    
    if (res.data.Results.length === 0){
        throw new Error (`No hay resultados para ${dir}`)
    }
    
    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;
    
    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLetLng
}

