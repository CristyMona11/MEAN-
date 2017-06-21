var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
  show: function(req, res) {
    Quote.find({}, function(err, quotes) {
      res.render('main', {quote: quotes});
    })
  },
  create: function(req, res) {
    var quote = new Quote({name: req.body.html_name, quote: req.body.quote});
    quote.save(function(err) {
      if(err){
        console.log('ERRRRRORRRRR!!!');
        res.render('index', {error: 'Your Field is Empty!!!'})
      } else {
        console.log('Quote Added!');
        res.redirect('/quotes');s
      }
    })
  }
}
