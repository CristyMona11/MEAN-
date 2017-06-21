var x =[3,4,"Dojo", "rocks", "Michael", "Sensei", ["hello", "world", "JavaScript is Fun"]]
for(var i=0; i<x.length; i++){
  x.push(100);
console.log(x[i]);
}

var x =[3,4,"Dojo", "rocks", "Michael", "Sensei", ["hello", "world", "JavaScript is Fun"]]
for(var i=0; i<x.length; i++){
  x.push(100);
console.log(x);
}

var sum=0
for(var i=0; i<501; i++){
sum = i+sum
console.log(sum);
}

var min=[];
var x=[1, 5, 90, 25, -3, 0]
for(var i=0; i<x.length; i++){
  if (x[i]<min){
    min=x[i];
  }
console.log(min);
}

var sum=0
var avg=0
var x=[1, 5, 90, 25, -3, 0]
for(var i=0; i<x.length; i++){
sum = sum +x[i];
avg = sum/x.length;
}
console.log(avg);
