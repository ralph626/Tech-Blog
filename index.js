require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const app = express();
app.use(express.json());
app.use(session({ secret: "weak", resave: true }));

const DB = require("./utils/db");
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3000;
DB.sync();
app.listen(PORT, () => {
  console.log("running at http://localhost:" + PORT);
});
