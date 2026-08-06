const user ={name :"jaseel",age:22,place:"irimbiliyam"}
console.log(Object.keys(user))
const k=Object.keys(user)
console.log(k)

const v=Object.values(user)
console.log(v)



const name = {name:"jaseel"}
const age={age:22}
const user2=Object.assign({},name,age)
console.log(user2)

console.log(Object.entries(user2))


const user3={
    name:"jaseel",
    age:22
}
user3.place="irimbiliyam"
Object.freeze(user3)

user3.name="arun"
console.log(user3)

const user4 ={
    name :"jaseer",
    age:23,
    place:"puthanathani"
}

Object.seal(user4)
user4.name="shamil"
user4.state ="kerala"
delete user4.age

console.log(user4)