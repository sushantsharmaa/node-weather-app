const http = require("http");
const fs = require("fs");
const requests = require("requests");

const html = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%city%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Jind&appid=9102fcb602fc2c718391570e2dab5618&units=metric"
    )
      .on("data", (chunk) => {
        const obj = JSON.parse(chunk);
        const arr = [obj];
        const realTimeData = arr.map((val) => replaceVal(html, val)).join("");
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
