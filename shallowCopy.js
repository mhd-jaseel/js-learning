// Original user object
const user = {
  name: "Jaseel",
  address: {
    city: "Kochi"
  }
};

// Create a shallow copy
const updatedUser = { ...user };

// Update only the top-level property
updatedUser.name = "Anas";

console.log(user);
console.log(updatedUser);