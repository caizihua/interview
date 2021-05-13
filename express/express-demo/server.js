const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    title: String,
  })
);

/* Product.insertMany([
  { title: "产品1" },
  { title: "产品2" },
  { title: "产品3" },
]); */

app.use(require("cors")());

app.use("/", express.static("public"));

app.get("/product", async (req, res) => {
  const data = await Product.find().limit(2).skip(1);
  const data1 = await Product.find().where({ title: "产品2" });
  res.send(data1);
});

app.get("/product/:id", async (req, res) => {
  const data = await Product.findById(req.params.id);
  res.send(data);
});

app.listen("3000", () => {
  console.log("App is running!!!");
});
