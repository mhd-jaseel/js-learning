

const sever1=new Promise((resolve, reject) => {
    setTimeout (()=>{
        resolve("fast sever")
    },2000)
})

const sever2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("slow server")
    },1000)
})
Promise.race([sever1,sever2])
  .then((server)=>console.log(server))