Promise.resolve(10)
    .then((num) => {
        console.log(num);
        return num + 5;
    })
    .then((result) => {
        console.log(result);
        return result * 2;
    })
    .then((finalResult) => {
        console.log(finalResult);
    });


    Promise.resolve(5)
    .then((num) => {
        return num + 5;
    })
    .then((num) => {
        return num * 2;
    })
    .then((num) => {
        console.log(num);
    });