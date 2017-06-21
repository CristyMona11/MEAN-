var first_variable;
function firstFunc(){
  var first_variable;
  first_variable = "Yipee I was first!";
  console.log(first_variable);
}
first_variable = "Not anymore!!!";
firstFunc();
console.log(first_variable);


var food;
function eat(){
  var food;
  food = "Chicken";
  console.log(food);
  food = "half-chicken";
  console.log(food);
}
food = "gone";
eat();
console.log(food);


var new_word;
function lastFunc(){
  var new_word;
  new_word = "NEW!";
  console.log(new_word);
}
new_word = "old";
lastFunc();
console.log(new_word);
