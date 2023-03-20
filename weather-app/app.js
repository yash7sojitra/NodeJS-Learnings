const geocode = require("./utils/geocode");
const request = require("request");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (!location) {
  console.log("Please provide a location.");
} else {
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
