var mongoose = require( 'mongoose' ),
   express  = require( 'express' ),
   bp       = require('body-parser'),
   path     = require( 'path' ),
   root     = __dirname,
   port     = process.env.PORT || 8000,
   app      = express();
app.use( express.static( path.join( root, 'client' )));/* this is what matches the script tags in the index.html; you need this to serve partial files*/
app.use( express.static( path.join( root, 'bower_components' )));

app.use(bp.json());
app.use(bp.urlencoded ({ extended: true}));
/* two different ways to send code back and forth-json and urlencoded(ejs) */

require("./server/config/database");
require("./server/config/routes")(app);
/*in your database and routes folder, use these folders, app calls the function and gives the express app */

app.listen( port, function() {
 console.log( `server running on port ${ port }` );
});
/* callback that runs after you load*/
