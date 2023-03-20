const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=35b510f7b813598563fb2cae54f9bc7a&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temperature = body.current.temperature;
      const feelsLike = body.current.feelslike;
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          temperature +
          " degrees out. It feels like " +
          feelsLike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
