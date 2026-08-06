// const student = {
//     profile: {
//         address: {
//             city: "Malappuram"
//         }
//     }
// };
const student = {
    profile: {}
};



console.log(student.profile?.address?.city);


// Optional Chaining + Nullish Coalescing (??)
// const user = {};

// const city = user.address?.city ?? "Unknown";

// console.log(city);


// // Real-World Use Case 3 (Function Calls)


// //Without optional chaining:
// const user = {};

// if (user.sayHello) {
//     user.sayHello();
// }
// //With optional chaining:
// const user = {};

// user.sayHello?.();




const user1 = null;
console.log(user1?.name);



//Real-World Use Case 4 (Arrays)
const users = [
    { name: "Jaseel" }
];

console.log(users[0]?.name);
console.log(users[1]?.name);

// Optional Chaining with Methods
const user = {
    // greet() {
    //     return "Hello";
    // }
};

console.log(user.greet?.());
