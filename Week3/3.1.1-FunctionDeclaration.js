// TODO: using the function expressions below, refactor them into function declarations
//Function Expression
const greet = function() {
  console.log("Hello!");
};

//Function Declaration
function greetdeclaration() {
  console.log("Hello");
}

//Function Expression
const threeModTwo = function() {
  console.log(3 % 2);
};

//Function Declaration
function threeModTwodeclaration () {
  console.log(3 % 2);
}

// Function Expression
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};


// Function Declaration
function checkDrivingAgedeclaration = () {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
