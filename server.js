// const express=require("express")

// const app=express()

// app.use((req,res,next)=>{
//     if(req.method==="GET"){
//         return res.status(403).send("get is blocked")
//     }
//     next ()
// })

// app.get("/login",(req,res)=>{
//    res.send("hello")
// })

// app.get ("/profile",(req,res)=>{
//     res.send("profile page")
// })


// const err = (err,req,res,next)=>{
//     res.status(500).json({message:err.message})
//     next()
// }
// app.use("/login",err)

// app.listen(3000,()=>{
//     console.log("server start")
// })


// const Event=require("events");
// const myemitter= new Event()

// myemitter.on("login",(name)=>{
//     console.log(`user logged ${name}`)
// })

// myemitter.emit("login","jaseel")






const Event =require("events")
const myevent=new Event()

myevent.on("login",(user)=>{
    console.log(`${user} logged`)

})
myevent.emit("login","jaseel")


const express=require("express");
const app=express();
app.get("/user/:id",(req,res)=>{
    const id=req.params.id;
    res.send(id)
})
app.listen(3000,()=>{
    console.log("server is running")
})