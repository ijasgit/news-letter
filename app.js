const express=require("express")
const bodyParser=require("body-parser")
const http=require("http")
const resquest=require("request")


const app=express()

app.use(express.static("public"))//to access the locally stored resoures
app.use(bodyParser.urlencoded({extended:true}))  


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/reDirect",function(req,res){
    const firstName=req.body.firstName
    const secondName=req.body.secondName
    const email=req.body.email
    console.log(firstName);
    res.write("<h1>first name is:"+firstName+"</h1>")
    res.write("<h1>first name is:"+secondName+"</h1>")
    res.write("<h1>first name is:"+email+"</h1>")
    res.send()
})






app.listen(3001,function(req,res){
    console.log("server run in 3001")
})