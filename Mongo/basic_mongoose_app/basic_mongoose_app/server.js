
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose_app');
var UserSchema = new mongoose.Schema({
 name: {type: String},
 age: {type: Number}
})

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  User.find({}, function(err,users){
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('you added a user!')
      res.render('index', {user: users});
    }
  });
});

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.html_name, age: req.body.html_age});

    user.save(function(err){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('you added a user!')
        res.redirect('/');
      }
    })
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})
