function* num(){
    yield 1;
    yield 2
    yield 3
}
const gen1=num()
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next());
function* numbers() {
    for (let i = 1; i <= 100; i++) {
        yield i;
    }
}

const gen = numbers();

const interval = setInterval(() => {
    const result = gen.next();

    if (result.done) {
        clearInterval(interval);
        console.log("Finished!");
        return;
    }

    console.log(result.value);
}, 2000);