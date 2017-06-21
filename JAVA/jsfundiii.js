function personConstructor(name){
  var person = {
    name:personConstructor(name),
    distance_traveled: 0,
    say_name: function(){
      alert(person.name);
    },
    say_something: function(x){
      if (x == "I am cool"){
        console.log(${person.name} says I am cool.)
      }
    },
    walk: function(x){
      alert(${person.name}  is walking);
      person.distance_traveled= distance_traveled + 3;
    },
    run: function(){
      alert(${person.name}  is running);
      person.distance_traveled= distance_traveled + 10;
    },
    crawl: function(){
      alert(${person.name}  is crawling);
      person.distance_traveled= distance_traveled + 1;
    }
  }
}

function ninjaConstructor(name){
  var ninja = {
    name:personConstructor(name),
    cohort: "March",
    belt_level: "yellow",
    levelUp: function(){
      alert(${ninja.name} is now a level up!),
    }
  }
}
