var countdownGenerator = function (x) {
  /* your code here */
  counter = x;
  return function(){
    if(counter > 3){
      console.log("Starting countdown!");
    }else if(counter < 4 && counter > 0){
      console.log("T-minus", counter + "...");
    }else if(counter === 0){
      console.log("Blast Off!");
    }else{
      console.log("Rockets already gone, bub!");
    }
    counter += -1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
