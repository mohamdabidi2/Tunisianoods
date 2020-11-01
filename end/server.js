const express=require ('express')
const User=require('./models/userModel')
const cors=require ('cors')
const BodyParser=require ('body-parser')
const mongoose=require ('mongoose')
const { model } = require('./models/userModel')
const port=process.env.PORT||4000
mongoose.connect("mongodb+srv://hexor:794613@cluster0.ikuch.mongodb.net/tunisianhoods?retryWrites=true&w=majority",{ useNewUrlParser:true,useUnifiedTopology: true })


const app=express()

app.use(cors())
app.use(BodyParser.json())


app.post('/AddNewUser',(req,res)=>{
    let newUser=new User(req.body)
    newUser.save()
    res.send(newUser)
     
  })
  app.get('/ListOfAllUsers',(req,res)=>{
   User.find()
   .then(data=>
    res.send(data))
   
     
  })














app.listen(port,()=>console.log("we can do sex here '"+port+"' bow!"))




