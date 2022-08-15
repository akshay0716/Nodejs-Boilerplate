const express = require("express");
const dotenv = require("dotenv");
const connectDBFunction = require("./config/db");
const morgan = require("morgan");
const expressHbs = require("express-handlebars");

//LOAD CONFIG

dotenv.config({ path: "./config/config.env" });

// CONNECT DB

connectDBFunction();

const app = express();

// LOGGING

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// HANDLEBARS

app.engine(
  "hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views/layouts/",
  })
);
app.set("view engine", "hbs");

// Routes

app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
