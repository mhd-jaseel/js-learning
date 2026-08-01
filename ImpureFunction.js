let count = 0;

function increment() {
    count++;
}
console.log(count)

let cart = 0;

function addToCart() {
    cart++;
    return cart;
}

addToCart(); // 1
addToCart(); // 2