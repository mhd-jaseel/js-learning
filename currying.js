function add(a) {
    return function (b) {
        return a + b;
    };
}

console.log(add(5)(10));


const addFive = add(5);

console.log(addFive(20));