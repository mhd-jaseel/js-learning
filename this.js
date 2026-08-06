// // console.log(this)
// // const user = {
// //   name: "Jaseel",

// //   greet: () => {
// //     console.log(this);
// //   },
// // };

// // user.greet();


// const user = {
//     name: "Jaseel",

//     greet() {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;

// fn();
const user1 = {
    name: "Jaseel"
};

const user2 = {
    name: "Rahul"
};

function greet() {
    console.log(this.name);
}
greet()