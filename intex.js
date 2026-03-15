// function outer(){
//     let count =0;
//     function inner(){
//         count++
//         console.log(count)
//     }
//     return inner
// }
// let counter =outer()
// counter()
// counter()




//call()


// function person(name){
//     console.log(this.greet,name)
// }
// const user={greet:"Hello"}
// person.call(user,"jaseel")


// const user ={name:"jaseel",age:22}
// const copy ={...user}
// console.log(copy)

// function name(name="jaseel"){
//     console.log("hello",name)
// }
// name()

// const user={name:"jaseel",age:22,city:"kochi"}
// const {name,age,city}=user
// console.log(name)

// const id =setInterval(()=>{
//     console.log("hello")

//     setTimeout(()=>{
//         clearInterval(id)
//     },10000)
// },2000)


// const user = {
//   name: "Jaseel",
//   address: {
//     city: "Kochi"
//   }
// };

// const copy = { ...user }; 

// copy.name = "Ali";
// copy.address.city = "Calicut";

// console.log(user.name);



// if(true){
//     let a= 10
//     console.log(a)
// }
// console.log(a)


// outer()

// function outer(){
//     console.log(this)
// }


// const a= {name:"jaseel",age:18,address:"djnfjdnfkd"}

// const {name,age,address}=a
// console.log(name)


// const existingUser = {
//   name: "Ali",
//   email: "ali@gmail.com",
//   role: "user"
// };

// const updates = { name: "Mohammed Ali" };

// const updatedUser = Object.assign(existingUser, updates);
// console.log(existingUser)
// console.log(updatedUser);
// console.log(updates);







const a={name:"jaseel"}
const b ={age:20,class:10}

console.log(Object.assign(a,b))
// Object.freeze(a)
// a.name="ali"
// console.log(a)
// delete b.class
// Object.seal(b)
// b.class=10
// console.log(b)


// let arr=[1,2,3]
// arr.push(4)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)

// arr.shift()
// console.log(arr)


// const numbers =[1,2,3,5]
// const duble =numbers.map(n=>n*2)
// console.log(duble)

// const num =[2,4,6,7]
// const even=num.filter(n=>n%2===0)
// console.log(even)

// const arr=[1,3,5,3]
// const sum = arr.reduce((total,n)=>total+n,0)
// console.log(sum)


// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Jaseel" }
// ];
// const user=users.find(us=>us.id===2)
// console.log(user)

// const arr =["apple", "banana", "orange", "grape"]
// arr.splice(0,1,"orange")
// console.log(arr)

const numbers = [1, [2, 4,[3,5,[7]]]];

const result = numbers.flat(3);

console.log(result);

