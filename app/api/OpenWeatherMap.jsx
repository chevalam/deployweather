var axios = require('axios');

const OPEN_WEATHER_URL_MAP='http://api.openweathermap.org/data/2.5/weather?appid=fbf787d2de4679e8d0dd942391960f87&units=metric';

module.exports = {
  getTemp : function(location){
    var encodedlocation = encodeURIComponent(location);
    var url = `${OPEN_WEATHER_URL_MAP}&q=${encodedlocation}`;
    return axios.get(url).then(
      function(result){
        if(result.data.cod && result.data.message){
            return new Error(result.data.message);
        } else {
          return result.data.main.temp;
        }
      },
      function(result){
        return new Error(result.data.message);
      }
  );
  }
};
