const fruits = ["Apple", "Mango", "Orange"];

console.log(...fruits);
//1. Expand an Array
// Array
const numbers = [10, 20, 30];

// Spread operator expands the array
console.log(...numbers);

// JavaScript internally does:
// console.log(10, 20, 30);

//2. Pass an Array to a Function
function add(a, b, c) {
    console.log(a + b + c);
}

const numbers = [10, 20, 30];

// Spread operator expands the array into arguments
add(...numbers);

// JavaScript internally does:
// add(10, 20, 30);
//3. Copy an Array
const arr1 = [1, 2, 3];

// Create a new array
const arr2 = [...arr1];

console.log(arr2);

// arr1 is NOT modified
//4. Merge Arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];

// Merge both arrays
const fullStack = [...frontend, ...backend];

console.log(fullStack);
//5. Add an Element at the End
const cart = ["Laptop", "Mouse"];

// Add Keyboard
const updatedCart = [...cart, "Keyboard"];

console.log(updatedCart);
//6. Add an Element at the Beginning
const cart = ["Mouse", "Keyboard"];

// Add Laptop at the beginning
const updatedCart = ["Laptop", ...cart];

console.log(updatedCart);
//7. Insert an Element in the Middle
const fruits = ["Apple", "Orange"];

// Insert Mango between Apple and Orange
const updated = [
    fruits[0],
    "Mango",
    ...fruits.slice(1)
];

console.log(updated);
//8. Copy an Object
const user = {
    name: "Jaseel",
    age: 21
};

// Create a new object
const copy = {
    ...user
};

console.log(copy);
//9. Merge Objects
const user = {
    name: "Jaseel"
};

const address = {
    city: "Kozhikode"
};

// Merge both objects
const profile = {
    ...user,
    ...address
};

console.log(profile);
//10. Override Object Properties
const user = {
    name: "Jaseel",
    age: 21
};

// Override age
const updated = {
    ...user,
    age: 22
};

console.log(updated);
//11. Merge Multiple Objects
const obj1 = {
    name: "Jaseel"
};

const obj2 = {
    city: "Kozhikode"
};

const obj3 = {
    country: "India"
};

const profile = {
    ...obj1,
    ...obj2,
    ...obj3
};

console.log(profile);
//12. Spread a String
const name = "Jaseel";

// Convert string into array of characters
const letters = [...name];

console.log(letters);

Output

["J", "a", "s", "e", "e", "l"]
//13. Math.max()
const numbers = [10, 30, 5, 100];

// Expand array into arguments
console.log(Math.max(...numbers));

// Internally:
// Math.max(10,30,5,100)
//14. Math.min()
const numbers = [10, 30, 5, 100];

// Expand array into arguments
console.log(Math.min(...numbers));
//15. Convert Array to Object
const skills = ["HTML", "CSS", "JS"];

// Array indexes become object keys
const obj = {
    ...skills
};

console.log(obj);


//16. Merge Guest Cart and User Cart (E-commerce)
const guestCart = ["Mouse"];
const userCart = ["Laptop"];

// Merge both carts
const finalCart = [
    ...userCart,
    ...guestCart
];

console.log(finalCart);
//17. Update User Profile
const user = {
    name: "Jaseel",
    email: "abc@gmail.com",
    phone: "1111111111"
};

// Update only phone
const updatedUser = {
    ...user,
    phone: "9999999999"
};

console.log(updatedUser);
//18. Multiple Spread Operators
const result = [
    ...[1, 2],
    ...[3, 4],
    ...[5, 6]
];

console.log(result);
//19. Shallow Copy Example
const user = {
    name: "Jaseel",
    address: {
        city: "Kozhikode"
    }
};

// Shallow copy
const copy = {
    ...user
};

// Changing nested object
copy.address.city = "Malappuram";

console.log(user.address.city);

// Output:
// Malappuram

//Reason: Spread creates a shallow copy, not a deep copy.

// 20. Override Priority
const obj1 = {
    name: "Jaseel"
};

const obj2 = {
    name: "Anas"
};

// Last value wins
const result = {
    ...obj1,
    ...obj2
};

console.log(result);

Output

{
    name: "Anas"
}