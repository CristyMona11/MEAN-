
var log;
function runningLogger(){
  var log;
  log = "I am running!";
  console.log(log);
}
runningLogger();

function multiplyByTen(x){
  console.log(x*10)
}
multiplyByTen(5);

var pizza;
function stringReturnOne(){
  var pizza;
  pizza = "SAUSAGE from Pie-Eyed!";
  console.log(pizza);
}
stringReturnOne();

var nike;
function stringReturnTwo(){
  var nike;
  nike = "CTR or Magista's are my favorite!";
  console.log(nike);
}
stringReturnTwo();

function caller(x){
  if (typeof x === "function"){
    x = "I love sharks";
  }
}
caller();

function myDoubleConsoleLog(x,y){
  if (typeof x == "function"){
      console.log(x)
    }
  if (typeof y == "function"){
      console.log(y)
  }
}
