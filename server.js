

const express= require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const User=require("./model/user")

mongoose.connect(process.env.url)
.then(()=>{
    console.log("db connnected")
})
.catch(()=>{
    console.log("error")
})



const app=express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("server is running")
})

app.post("/user",async(req,res)=>{
    try{
        const{name,age}=req.body

        const newUser= new User({
            name:name,
            age:age
           
        })
        
        
        await newUser.save()

        console.log("user save")
        res.send ("login success ful")

    }catch{
        console.log("something wrong")
    }
})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
    
})