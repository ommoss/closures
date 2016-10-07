var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = -1;

  return function (){
    counter += 1;
    return list[counter];
  };
})();

console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());


/*var nextId = (function () {

  var id = 0;

  return function () {
    id += 1;
    return id;
  }
})();
*/
//console.log(nextId()); // 1
//console.log(nextId()); // 2