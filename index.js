const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("it works!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running at http://localhost:" + PORT);
});
