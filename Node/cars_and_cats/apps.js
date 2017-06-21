var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

    console.log('client request URL:', request.url);

    if(request.url === '/cars'){
      console.log("We hit the cars route");
      fs.readFile('views/cars.html', 'utf8', function(errors, contents){
        console.log(errors);
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === '/stylesheets/cars.css'){
      fs.readFile('./stylesheets/cars.css', 'utf8', function(errors, contents){
       response.writeHead(200, {'Content-type': 'text/css'});
       response.write(contents);
       response.end();
     });
    }
    else if(request.url === '/images/pom.jpg'){
      fs.readFile('images/pom.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/puppy.jpg'){
      fs.readFile('images/puppy.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/red.jpg'){
      fs.readFile('images/red.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/scooter.jpg'){
      fs.readFile('images/scooter.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/squirrel.jpg'){
      fs.readFile('images/squirrel.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/toy.jpg'){
      fs.readFile('images/toy.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/cats'){
      fs.readFile('views/cats.html', 'utf8', function(errors, contents){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === '/stylesheets/cats.css'){
      fs.readFile('./stylesheets/cats.css', 'utf8', function(errors, contents){
       response.writeHead(200, {'Content-type': 'text/css'});
       response.write(contents);
       response.end();
     });
    }
    else if(request.url === '/images/bear.jpg'){
      fs.readFile('images/bear.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/cat.jpg'){
      fs.readFile('images/cat.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/dog.jpg'){
      fs.readFile('images/dog.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/lioncub.jpg'){
      fs.readFile('images/lioncub.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/monkey.jpg'){
      fs.readFile('images/monkey.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/tiger.jpg'){
      fs.readFile('images/tiger.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/car_form'){
      fs.readFile('views/car_form.html', 'utf8', function(errors, contents){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else{
      response.writeHead(404);
      response.end('URL requested in NOT available.');
    }

});

server.listen(7077);
console.log("Page Works")
