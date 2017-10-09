var express = require("express");
var passport = require("passport");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(__dirname + '/public'));

//Routes
require("./routes/html-routes.js")(app);
// (app, passport);

//Sync Database
db.sequelize.sync({/*force: true*/}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
  });
});