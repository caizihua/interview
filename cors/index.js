const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use("/", express.static("public"));

app.get("/prod", function (req, res) {
  res.send([
    {
      id: 1,
      title: "aaa",
    },
  ]);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
