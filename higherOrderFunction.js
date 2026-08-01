//1. take a function as an argument 

function greet(){
    console.log("hello")
}
function execute(fn){
    fn()
}
execute(greet)   //execute is a Higher-Order function it accepts another fuction (greet) as an argument

   //real world

function loginSuccess(){
    console.log("login success")
}

function login(callback){
    console.log("cheking....")

    callback()
}

login(loginSuccess)

//2. return a function 

function discount(percentage){
    return function(price) {
        return price-(price*percentage/100)
    }
}

const tenpercentage= discount(10)

console.log(tenpercentage(1000))  
// discount is a Higher-Order function because it returns another function 

const products = [
    { name: "Phone", price: 30000 },
    { name: "Laptop", price: 70000 }
];

const expensiveProducts = products.filter(function(product) {
    return product.price > 50000;
});

console.log(expensiveProducts);