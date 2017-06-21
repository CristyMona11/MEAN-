var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs');
var DogSchema = new mongoose.Schema({
  breed: {type: String, required: true, minlength:1},
  color: {type: String, required: true, minlength:3},
  size: {type: String, required: true, minlength:3}
}, {timestamps: true });

mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog')
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser. urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  Dog.find({}, function(err, dogs){
    if(err) {
      console.log('something went wrong')
    } else {
      console.log('you added a user')
      res.render('index', {dog: dogs})
    }
  });
});

app.get('/mongooses/new', function(req, res){
  res.render('form');
});

app.get('/mongooses/:id', function(req, res){
  Dog.findOne({ _id: req.params.id }, function(err, dog){
    if (err){
      console.log('ERRORR!');
    } else {
      res.render('dog', {dog: dog});
    }
  });
});

app.get('/mongooses/:id/edit', function(req, res){
  Dog.findOne({ _id: req.params.id }, function(err, dog){
    if (err){
      console.log('ERRORR!');
    } else {
      res.render('edit', {dog: dog});
    }
  });
});

app.post('/mongooses', function(req, res){
  var dog = new Dog({breed: req.body.breed, color: req.body.color, size: req.body.size});
  dog.save(function(err){
    if(err){
      console.log('ERRRRRORRRRR!!!');
      res.render('form', {error:'Your Field is Empty!'})
    } else {
      console.log('Dog Added');
      res.redirect('/');
    }
  });
});

app.post('/mongooses/:id', function(req, res){
  // console.log('here');
  // dog = Dog.findOne(req.params.id)
  // dog.save
  // Dog.update({ dog }, {breed: req.body.breed ,color: req.body.color, size: req.body.size }, function(err, dog){
  //   if (err){
  //     console.log('ERRORR!');
  //   } else {
  //     res.redirect('/');
  Dog.findOne({_id: req.params.id}, function(err, dog){
    dog.breed = req.body.breed
    dog.color = req.body.color
    dog.size = req.body.size
    console.log('asdf')
    dog.save(function(err, dog){
      console.log('dog')
      res.redirect('/')
    });
  });
});

app.post('/mongooses/:id/destroy', function(req, res){
  Dog.remove({ _id: req.params.id }, function(err, dog){
    if (err){
      console.log('ERRORR!');
    } else {
      console.log('Dog Deleted!')
      res.redirect('/');
    }
  });
});



app.listen(8000, function() {
    console.log("listening on port 8000");
});
