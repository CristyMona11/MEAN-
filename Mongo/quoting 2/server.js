var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose_app');
var QuoteSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength:1},
  quote: {type: String, required: true, minlength:3}
}, {timestamps: true });

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser. urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/quotes', function(req, res){
    var quote = new Quote({name: req.body.html_name, quote: req.body.quote});
    quote.save(function(err){
      if(err){
        console.log('ERRRRRORRRRR!!!');
        res.render('index', {title: 'Your Field is Empty!!!', errors:quote.errors})
      } else {
        console.log('Quote Added!');
        res.redirect('/quotes');
      }
    })
});

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, quotes){
    if(err) {
      console.log('Merp! Error!');
    } else {
      console.log('Look who showed up, QUOTE!')
      res.render('quotes', {quote: quotes});
    }
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
