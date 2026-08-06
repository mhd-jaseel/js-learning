

function introduce(city) {
    console.log(`Hi, I am ${this.name} from ${city}`);
}

const user1={
    name:"jaseel"
}
const user2={
    name:"nishad"
}
//call()
introduce.call(user1,"malappuram")
introduce.call(user2,"kochi")

// apply()
introduce.apply(user1, ["Malappuram"]);
introduce.apply(user2, ["Kochi"]);
// bind()

const greetJaseel = introduce.bind(user1, "Malappuram");

console.log("Function created...");

greetJaseel();