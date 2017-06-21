function thisConstructor(name, number_of_wheels, number_of_passengers, speed){
  // PRIVATE
  var distance_travelled = 0
  var updateDistanceTravelled = function(){
    updateDistanceTravelled = this.speed + distance_travelled;
  }

  this.name = name;
  this.number_of_wheels = number_of_wheels;
  this.number_of_passengers = number_of_passengers;
  this.speed = speed;

  this.this = function(){
    console.log("Ring-a-ling! The " + this.name + " is coming;" + this.number_of_wheels + " wheels and all.");
  }

  this.bus = function(){
    console.log("Ring-a-ling! The " + this.name + " is coming. There are " + this.number_of_passengers + " people on the bus, and a couple more to pick up.");
  }
  this.move = function(){
    console.log("Distance traveled is " + this.speed + "mph.")
    updateDistanceTravelled();
  }

  this.checkMiles = function(){
    console.log(distance_travelled)
  }
}

var Bike = new thisConstructor("Bike", 3, 4, 11);
Bike.this();
Bike.checkMiles();

Bike.this = function() {
  console.log("ring ring!")
}
Bike.this();
Bike.move();

var Sedan = new thisConstructor("Tesla", 4, 7, 22);
Sedan.this();

Sedan.this = function() {
  console.log("Honk Honk!")
}
Sedan.this();
Sedan.move();

var Bus = new thisConstructor("MegaMexican", 16, 87, 33);
Bus.this();
Bus.bus();
Bus.move();

// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log("this is a private method for " + self.name);     // refer to name via self
//     console.log(self);
//   }
//   //PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod();
//     console.log(privateVar);
//   }
// }
// var Speros = new Ninja("Speros", 24, "MBA");
// Speros.introduce();
