const express = require("express");

const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=%20San%20Francisco&appid=7c495b0d43dec3868257874c48b758c4&units=metric";

  https.get(url, function (response) {
    console.log(response);
  });
   res.send("Server is up and running.");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
