
var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");/* use the Friend variable to query through the database and to update, delete, create a new Friend, line 18*/
/* query-asking a database to do something */
module.exports.index = function(request, response)/*  5-14 runs when we get a question; request here doesn't really matter, request has the nouns, response has the verbs(how to respond, redirect?, json?, error code?)*/
{
  Friend.find({},function(err, friends){/* Friend.find is querying the database ({}-means all), find is a filtering {}, no filter, so including all friends. line, you are filtering, and finding only one*/
    if (err){
      console.log(err);
    }else{
      response.json({message: "Friends Index", friends:friends})/* friends:friends, key from model is friends, value is friends. */
      /* giving a response back to whichever client asked, this is returning the request from Friend.find */
      /* Friend.find{},-is asking; function(err,friends)-answer/response from database*/
    }
  });
}
/* err can be named whatever you want, as long as it stays the same throughout*/
module.exports.create = function(request, response)
{
 console.log("FRIENDS CREATE, REQUEST BODY:", request.body);
 var friend = new Friend({
   first_name: request.body.first_name,
   last_name: request.body.last_name,
   birthday: request.body.birthday
 });
 friend.save(function(err){
   if (err) {
     console.log(err);
   } else {
     console.log("SAVED FRIEND:", friend);
     response.json({message:"Succesfully created friend!", friend:friend});
   }
 });
}

module.exports.update = function(request, response)
{
  Friend.findOne({_id: request.params.id}, function(err, friend){
    /* when client clicks, it finds the one you clicked on, params(:id of the url from routes folder)*/
    if (err){
      console.log(err);
    } else {
      /* if no error, go into the object, and reassign key value pairs based on request.body(your form)*/
      friend.first_name = request.body.fist_name;
      friend.last_name = request.body.last_name;
      friend.birthday = request.body.birthday;
      friend.save(function(err, updatedFriend){ /* .save is the controller telling it to save(out messageww);this function will run and bring info back in*/
        if (err){
          console.log(err);
        }else{
          response.json(udpatedFriend); /* you send back the single, updated friend*/
        }
      });
     }
  });
}
module.exports.delete = function(request, response)
{
    Friend.remove({_id: request.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        response.json({message: "Friend DELETED!"});
      }
    })
};

module.exports.show = function(request, response)
{
  Friend.findOne({_id: request.params.id}, function(err, friend){
    if(err){
      console.log(err);
    }else{
    response.json({message: "Friend" + friend._id, friend: friend });
    }
  })
};
