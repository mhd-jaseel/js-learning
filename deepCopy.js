// Original user object
const user = {
  name: "Jaseel",
  address: {
    city: "Kochi"
  }
};

// Create a deep copy
const updatedUser = structuredClone(user);

// Change nested object
updatedUser.address.city = "Calicut";

console.log(user.address.city);
console.log(updatedUser.address.city);


//json method (reson of not recomented)

const user = {
  name: "Jaseel",
  greet() {
    console.log("Hello");
  }
};

const copy = JSON.parse(JSON.stringify(user));

console.log(copy);