> db.students.remove({name: "Sophia"})
WriteResult({ "nRemoved" : 1 })
#removes people by the name Sophia

> db.students.remove({home_state: "California"})
WriteResult({ "nRemoved" : 1 })
#removes people from the state of California

> db.students.update({name: "Sophia"},{$pull: {'interests':'macaroni'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
#removes the array index of macaroni

> db.students.update({name: "Adriana"}, {$set: {interests: ['coding','brunch','taxes']}})
> db.students.update({name: "Adriana"}, {$set: {interests: ['coding','brunch','soccer']}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
#add soccer to the array and add taxes to top array

> db.students.updateMany({ lucky_number: {$gt: 1}}, {$set: {interests: ['coding', 'brunch', 'MongoDB']}})
{ "acknowledged" : true, "matchedCount" : 6, "modifiedCount" : 6 }
#how i added an array to every single student by using a lucky number over 1

> db.students.find({lucky_number: {$lt: 30, $gt: 1}})
> db.students.find({lucky_number: {$lt: 30, $gt: 1}}).pretty()
#all students with the lucky number between 1 and 30.
db/st
