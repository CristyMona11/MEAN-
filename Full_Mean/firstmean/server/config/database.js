
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/firstmean", function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Connected to Mongoose!");
  }
});

/*this error function is a callback function*/

require("../models/friend")
