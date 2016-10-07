var wrapLog = function (callback, name) {

  return function(){
    var x = callback.apply(x, arguments);
    console.log(name + "(" + arguments[0] + "," +arguments[1] + ") =>", x);
  }
};

var sum = function (a,b) {
 return a + b;
};
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5


