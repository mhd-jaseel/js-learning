// const promise = new Promise((resolve, reject) => {
//     // No resolve() or reject()
// });

// console.log(typeof(promise));

// const checkStock = new Promise((resolve, reject) => {
//     let stock=false
//     if(stock){
//         resolve("stock availabel")
//     }else{
//         reject("out of stock")
//     }
// })
// checkStock
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((msg)=>{
//     console.log(msg)
// })


// //payment success 

// function paymentStatus(paymentSuccess){
//     return new Promise((resolve, reject) => {
//         if(paymentSuccess){
//             resolve("payment success")
//         }else{
//             reject("payment faild")
//         }
//     })

// }

// paymentStatus(false)
// .then((msg)=>{
//   console.log(msg)
// })
// .catch((err)=>{
//    console.log(err)
// })

// function placeOrder(paymentSuccess) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing your payment...");

//         setTimeout(() => {
//             if (paymentSuccess) {
//                 resolve("✅ Order placed successfully!");
//             } else {
//                 reject("❌ Payment failed!");
//             }
//         }, 2000);
//     });
// }

// placeOrder(true)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Hide loading spinner");
//     });


const data =new Promise((resolve, reject) => {

    console.log("data loading ...")
     setTimeout(()=>{
              resolve("products data")
     },2000)
})

data
 .then((result)=>{
    console.log(result)
 })
 .catch((err)=>{
    console.log(err)
 })
.finally(()=>{
    console.log("fetch completeted")
})

// let checkStock= new Promise((resolve, reject) => {
//     let stock=true
//     if(stock){
//         resolve("stock availabel")
//     }else{
//         reject("out of stock")
//     }
// })

// checkStock
//  .then((result)=>{
//     console.log(result)
//  })
//  .catch((msg)=>{
//     console.log(msg)
//  })
