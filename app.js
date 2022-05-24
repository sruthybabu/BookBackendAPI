const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const req = require("express/lib/request")
const res = require("express/lib/response")

var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

var bookModel=Mongoose.model("books",
     
new Mongoose.Schema({
title:String,
author:String,
price:String


})


)
Mongoose.connect("mongodb+srv://sruthybabu:sruthy4599@cluster0.bip6a.mongodb.net/BookDb")


app.post("/api/bookadd",(req,res)=>{
    var getTitle=req.body.title 
    var getAuthor=req.body.author 
    var getPrice=req.body.price 
    data={"title":getTitle,"author":getAuthor,"price":getPrice}
    
    let mybook=new bookModel(data)
    mybook.save((error,data)=>{
        if(error)
        {
            res.send({"status":"error","data":error})
        }
        else{
            res.send({"status":"success","data":data})
        }



    })

    




})

app.get("/api/viewbook",(req,res)=>{
    res.send("View all Post")
})

app.listen(4000,()=>{
    console.log("Server Running")
})