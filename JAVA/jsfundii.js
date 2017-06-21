function getSum(x,y){
  var sum=0;
  for(var i=x; i<y; i++){
  sum = i+sum
  }
  console.log(sum);
}

function getMin(x){
  var min=[0];
  var x=[]
  for(var i=0; i<x.length; i++){
    if (x[i]<min){
      min=x[i];
    }
  console.log(min);
}

function getAvg(x){
  var sum=x[0]
  var avg=0
  var x=[]
  for(var i=0; i<x.length; i++){
    sum = sum + x[i];
    avg = sum/x.length;
  }
  return(avg);
}

var getSum = function (x,y){
  var sum=0;
  for(var i=x; i<y; i++){
  sum = i+sum
  }
  console.log(sum);
}

var getMin = function (x){
  var min=[0];
  var x=[]
  for(var i=0; i<x.length; i++){
    if (x[i]<min){
      min=x[i];
    }
  console.log(min);
}

var getAvg = function (x){
  var sum=x[0]
  var avg=0
  var x=[]
  for(var i=0; i<x.length; i++){
    sum = sum + x[i];
    avg = sum/x.length;
  }
  return(avg);
}

var partFour = {
  getSum: function getSum(x,y){
    var sum=0;
    for(var i=x; i<y; i++){
    sum = i+sum
    }
    console.log(sum);
  }
  getMin: function getMin(x){
    var min=[0];
    var x=[]
    for(var i=0; i<x.length; i++){
      if (x[i]<min){
        min=x[i];
      }
    console.log(min);
  }
  getAvg:function getAvg(x){
    var sum=x[0]
    var avg=0
    var x=[]
    for(var i=0; i<x.length; i++){
      sum = sum + x[i];
      avg = sum/x.length;
    }
    return(avg);
  }
}

var person = {
    name: "Cristina",
    distance_traveled: 0,
    say_name: function(){
      alert(person.name);
    },
    say_something: function(x){
      if (x == "I am cool"){
        console.log(${person.name} says I am cool.)
      }
    }
    walk: function(x){
      alert(${person.name}  is walking);
      person.distance_traveled= distance_traveled + 3;
    }
    run: function(){
      alert(${person.name}  is running);
      person.distance_traveled= distance_traveled + 10;
    }
    crawl: function(){
      alert(${person.name}  is crawling);
      person.distance_traveled= distance_traveled + 1;
    }
}
