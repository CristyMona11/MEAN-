var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
  register: function(req, res){
    var user = new User(req.body);
    user.save(function(err, data){
      if(err){
        res.status(400).send("user didn't save");
      }else{
        req.session.user = data;
        res.sendStatus(200);
      }
    })
  },
  login: function(req, res){
    User.findOne({email: req.body.email}, function(err, data){
      if(err){
        res.status(400).send('user not found');
      }else{
        req.session.user = data;
        res.sendStatus(200);
      }
    })
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/')
  },

  current: function(req, res){
    if(req.session.user){
      res.json(req.session.user);
    }else{
      res.status(401).send('no user in sesion');
    }
  },
  getPosts: function(req, res){
    Post.find({}).populate('user').populate({path: 'comments', populate: {path: 'user'}}).exec(function(err, data){
      if(err){
        res.status(400).send("problem getting all the posts")
      } else{
        res.json(data);
      }
    })
  },
  createPost: function(req, res){
    var post = new Post(req.body);
    post.user = req.session.user._id;
    post.save(function(err, data){
      if(err){
        res.status(400).send("problem saving posts")
      } else{
        res.sendStatus(200);
      }
    })
  },
  createComment: function(req, res){
    Post.findone({_id: req.params.id}, function(err, post){
      if (err){
        res.status(400).send(err);
      } else{
        var comment = Comment(req.body);
        comment.user = req.session.user._id;
        comment._post = post._id;
        comment.save(function(err, new_comment){
          if(err){
            console.log(err);
          }else{
            post.comments.push(new_comment);
            post.save(function(err, updated_post){
              if(err){
                console.log(err);
              }else{
                res.sendStatus(200);
              }
            })
          }
        })
      }
    })
  }
}
