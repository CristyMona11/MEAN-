var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/survey-test-app")
mongoose.Promise = global.Promise;

app.use(express.static("./client"));
app.use(express.static("./node_modules"));

app.use(require("body-parser").json());

app.post("/users", function(req, res){
  console.log(req.body.username);
});

app.listen(8000, function() {
  console.log("Listening on 8000");
});
