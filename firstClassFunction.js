//1. Store Function in an Array

function add() {
  console.log("Add");
}

function edit() {
  console.log("Edit");
}

function deleteItem() {
  console.log("Delete");
}

const actions = [add, edit, deleteItem];

actions[0](); // Add
actions[1](); // Edit
actions[2](); // Delete

//  2. Store Function in an Object

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  }
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5

// Function assigned to a variable
const greet = function () {
  console.log("Hello");
};

greet(); // Hello

//Passing a function as an argument

function sayHello() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(sayHello); // Hello

//Returning a function

function multiplyBy(num) {
  return function (value) {
    return value * num;
  };
}

const double = multiplyBy(2);

console.log(double(5)); // 10
// Real-life Example (E-commerce)

// Suppose every product gets a different discount.
function discount(percentage){
  return function(price){
    return price-(price*percentage/100)
  }
}

const percentage=discount(10)
console.log(percentage(1000))





function greet() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}
execute(greet)
execute(greet()); // ❌ Error