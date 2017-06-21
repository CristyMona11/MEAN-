
var mongoose = require("mongoose");
var friendSchema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  birthday: {type: Date, required: true},
}, { timestamps:true});

mongoose.model("Friend", friendSchema)
/* you're naming your model, Friend */
