function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5, 3)); // 8

function calculateDiscount(price) {
    return price * 0.9;
}

console.log(calculateDiscount(1000)); // 900
function test() {
    console.log("Hello");

    test();
}

test();