const express=require ('express')
const User=require('./models/userModel')
const cors=require ('cors')
const path=require('path')
require('dotenv').config()
const BodyParser=require ('body-parser')
const mongoose=require ('mongoose')
const { model } = require('./models/userModel')
const port=process.env.PORT||4000
const bcrypt =require('bcrypt')
const log = console.log;
const nodemailer = require("nodemailer");
const HtmlEmail = require('./Mail')

mongoose.connect("mongodb+srv://hexor:794613@cluster0.ikuch.mongodb.net/tunisianhoods?retryWrites=true&w=majority",{ useNewUrlParser:true,useUnifiedTopology: true })


const app=express()

app.use(cors())
app.use(BodyParser.json())



  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL , 
        pass: process.env.PASSWORD  
    }
});
app.post('/AddNewUser',(req,res)=>{
  let randomByte=Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15)+Math.random().toString(36).substr(2, 15)
    let newUser=new User({...req.body,Emailtoken:randomByte})
    console.log(newUser)
    // Step 2
let mailOptions = {
  from: 'noreply@tunisianhoods.com',
  to: newUser.Email, 
  subject: newUser.FullName,
  html:HtmlEmail(newUser)
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
      return log(err);
  }
  return log('Email sent!!!');
});

    newUser.save()
    res.send(newUser)
     
  })





  app.get('/ListOfAllUsers',(req,res)=>{
   User.find()
   .then(data=>
    res.send(data))
  })
app.get('/verify=:token',async(req,res)=>{
  let token=req.params.token
 User.findOne({Emailtoken:token},(err,doc)=>{
    if(err){
    res.send("err")
    }
    else{
      doc.verifiedEmail=true
      doc.save()
    }
   
res.sendFile(    path.join(__dirname + '/EmailV.html'))
  })



})


app.get("/getuserLogin/:email/:password",(req,res)=>{
  let email=req.params.email
  let password=req.params.password
  User.findOne({Email:email,Password:password},(err,doc)=>{
     if(err){
     res.send("err")
     }
     else{
      
   
      res.send(doc)
     
     }
    
 
   })
})





app.listen(port,()=>console.log("we can do 3ejja mergaz here '"+port+"' bow!"))




