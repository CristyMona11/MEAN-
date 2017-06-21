function VehicleConstructor(name, number_of_wheels, number_of_passengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.number_of_wheels = number_of_wheels;
  vehicle.number_of_passengers = number_of_passengers;

  vehicle.makeNoise = function(){
    console.log("Ring-a-ling! The " + vehicle.name + " is coming;" + vehicle.number_of_wheels + " wheels and all.");
  }

  vehicle.bus = function(){
    console.log("Ring-a-ling! The " + vehicle.name + " is coming. There are " + vehicle.number_of_passengers + " people on the bus, and a couple more to pick up.");
  }


  return vehicle;
}

var Bike = VehicleConstructor("Bike", 3, 4);
Bike.makeNoise();

Bike.makeNoise = function() {
  console.log("ring ring!")
}
Bike.makeNoise();

var Sedan = VehicleConstructor("Tesla", 4, 7);
Sedan.makeNoise();

Sedan.makeNoise = function() {
  console.log("Honk Honk!")
}
Sedan.makeNoise();

var Bus = VehicleConstructor("MegaMexican", 16, 87);
Bus.makeNoise();
Bus.bus();
