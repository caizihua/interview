const { json } = require("express");
const express = require("express");
const app = express();

app.get("/server", (req, res) => {
  //设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello Express GET");
});

app.all("/server", (req, res) => {
  //设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  //接受所有响应头参数
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("Hello Express POST");
});

app.all("/jsonServer", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = {
    name: "app",
  };
  const str = JSON.stringify(data);
  res.send(str);
});

app.get("/delay", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    res.send("延时响应");
  }, 1000);
});

app.all("/axios", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "JACK" };
  res.send(JSON.stringify(data));
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
