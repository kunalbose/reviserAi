require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 3000;
const path = require("path");

// Css
app.use(express.static("public"));


app.use(express.urlencoded({ extended: false }));

// Setting up view engine
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// Routes
require("./routes/web")(app);

// Listener
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});