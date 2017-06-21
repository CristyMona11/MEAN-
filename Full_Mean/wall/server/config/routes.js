var users = require('../controllers/users.js');

module.exports = function(app){
  app.post('/register', users.register);
  app.post('/login', users.login);
  app.get('/logout', users.logout);
  app.get('/current', users.current);
  app.get('/posts', users.getPosts);
  app.post('/post', users.createPost);
  app.post('/comment/:id', users.createComment);
}
