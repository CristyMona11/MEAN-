
var friends = require("../controllers/friends");
/* saving the friends file as a variable*/

module.exports = function(app)
{/* you can only require what gets exported, so you must export in order to require, this comes from line 17, (what I asked about)*/
  app.get("/api/getfriends", friends.index);
  app.get("/api/friends/:id", friends.show);
  app.put("/api/friends/:id", friends.update);/* you use :id to get a specific person, so if you change the :id here to something else, :someid, then you have to change it in server side controller for 'request.params.id' -->request.params.someid*/
  app.post("/api/newfriend", friends.create);
  app.delete('/api/friends/:id', friends.delete);
};
/* when you see api, it means server side*/
