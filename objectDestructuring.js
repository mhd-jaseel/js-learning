const obj={
    name:"jaseel",
    age:22
}
const{name,age}=obj
console.log(name)
console.log(age)

//Nested Object Destructuring
const user = {
    name: "Jaseel",
    address: {
        city: "Malappuram",
        state: "Kerala"
    }
};

const {
    address: { city }
} = user;

console.log(city);

//Default Values
// const user = {
//     name: "Jaseel"
// };

// const { name, age = 20 } = user;

// console.log(age);


//Renaming Variables
const user1 ={name:"jaseel"}
const {name:username}=user1

console.log(username)