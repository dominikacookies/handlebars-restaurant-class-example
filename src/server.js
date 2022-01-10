require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const handlebars = require("express-handlebars");
const helpers = require("./helpers");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

const handlebarsOptions = { helpers };
const hbs = handlebars.create(handlebarsOptions);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

const init = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

init();
