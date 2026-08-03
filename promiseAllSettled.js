const p1=new Promise((resolve, reject) => {
    resolve("product")
})
const p2=new Promise((resolve, reject) => {
    reject("image error")
})
const p3=new Promise((resolve, reject) => {
    resolve("rating")
})

Promise.allSettled([p1, p2, p3])
    .then((result)=>{
            console.log(result)
    })