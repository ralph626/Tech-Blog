require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const db = require("./utils/db");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "weak",
    resave: true,
    store: new SequelizeStore({
      db,
    }),
  })
);

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/auth", require("./routes/auth"));
app.use("/post", require("./routes/post"));
app.use(require("./routes/web"));
const PORT = process.env.PORT || 3000;
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("running at http://localhost:" + PORT);
  });
});
