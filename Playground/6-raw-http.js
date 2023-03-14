const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=35b510f7b813598563fb2cae54f9bc7a&query=Ahmedabad";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
