const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running at http://localhost:" + PORT);
});
