var express = require("express");
var app = express();
var data = [];

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
  response.render('index');
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.post("/result", function(request,response){
  data.push(request.body);
  console.log(data)
  response.redirect('results');
})

app.get("/results", function(request,response){
  response.render('results', {info: data});
})

app.listen(8000, function(){
  console.log("listening on port 8000");
})
