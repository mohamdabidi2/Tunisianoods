const express = require('express')
const User = require('./models/userModel')
const Rule = require('./models/rule.js')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const BodyParser = require('body-parser')
const mongoose = require('mongoose')
const { model } = require('./models/userModel')
const port = process.env.PORT || 4000
const bcrypt = require('bcrypt')
const log = console.log;
const nodemailer = require("nodemailer");
const HtmlEmail = require('./Mail')
const Product = require('./models/DonationPacks')
const Donation = require('./models/donationModel')

mongoose.connect("mongodb+srv://hexor:794613@cluster0.ikuch.mongodb.net/tunisianhoods?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })


const app = express()

app.use(cors())
app.use(BodyParser.json())



let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
app.post("/verif/confirmationEmail", (req, res) => {
  let email = req.body.email
  User.findOne({ Email: email }, (err, doc) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(doc.verifiedEmail)
    }
  })
})
app.post('/SendConfirmationMAil', (req, res) => {
  let email = req.body.email
  User.findOne({ Email: email }, (err, doc) => {
    if (err) {
      console.log(err)
    }
    else {
      let mailOptions = {
        from: 'noreply@tunisianhoods.com',
        to: doc.Email,
        subject: doc.FullName,
        html: HtmlEmail(doc)
      };

      // Step 3
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          return log(err);
        }
        return log('Email sent!!!');
      });
    }
  })
})
app.post('/AddNewUser', (req, res) => {
  User.findOne({ Email: req.body.Email }, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(data)
      if (data == null) {

        let randomByte = Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15)
        let newUser = new User({ ...req.body, Emailtoken: randomByte })
        console.log(newUser)
        newUser.save()
        res.send({ msg: "success", data: newUser })

      }
      else {
        res.send({ msg: "email already exists" })
      }
    }
  })



})

//add some rules
app.post('/add/rule/admin', (req, res) => {

  let newRule = new Rule({ ...req.body})
  newRule.save()
  res.send({ msg: "success", data: newRule })




})
//add some DonationProducts
app.post('/add/donation/admin', (req, res) => {

  let newProduct = new Product({ ...req.body})
  newProduct.save()
  res.send({ msg: "success", data: newProduct })




})
app.post('/add/donation/user', (req, res) => {

  let newDonation = new Donation({ ...req.body})
  newDonation.save()
  res.send({ msg: "success", data: newDonation })




})
//get all rules
app.get('/rules/all', (req, res) => {

  Rule.find({},(err,data)=>{
if (err){
  res.send("!rule")
}
res.send(data)
  })

})

//get all Donation Products
app.get('/Donation/all', (req, res) => {

  Product.find({},(err,data)=>{
if (err){
  res.send("!rule")
}
res.send(data)
  })

})
//get user info
app.get('/username/:id', (req, res) => {
  let id=req.params.id
  User.find({_id:id},(err,data)=>{
if (err){
  res.send("!user")
}
res.send({FullName:data.FullName,img:data.userPhoto})
  })

})

app.get('/ListOfAllUsers', (req, res) => {
  User.find()
    .then(data =>
      res.send(data))
})
app.get('/verify=:token', async (req, res) => {
  let token = req.params.token
  User.findOne({ Emailtoken: token }, (err, doc) => {
    if (err) {
      res.send("err")
    }
    else {
      doc.verifiedEmail = true
      doc.save()
    }

    res.sendFile(path.join(__dirname + '/EmailV.html'))
  })



})


app.get("/getuserLogin/:email/:password", (req, res) => {
  let email = req.params.email
  let password = req.params.password
  User.findOne({ Email: email, Password: password }, (err, doc) => {
    if (err) {
      res.send("err")
    }
    else {


      res.send(doc)

    }


  })
})
app.get('/getallusersdata',(req,res)=>{
  User.find({},(err,data)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(data.map(el=>{return{
        _id:el._id,
        FullName:el.FullName
        ,Email:el.Email
        ,DiscordID:el.DiscordID
        ,verifiedEmail:el.verifiedEmail
        ,Emailtoken:el.Emailtoken
        ,DateInscription:el.DateInscription
      }}))
    }
  })
})
app.post("/getChartUsers/:Month/:Day/:Year",(req,res)=>{
  let day= req.params.Day
  let month= req.params.Month
  let Year= req.params.Year

  User.find({},(err,doc)=>{
    if(err){
      console.log(err)
    }
    else{
      let doc1=doc
      let newUserMonth=doc.map(el=>el.DateInscription.toISOString().substr(0,10)).filter(el=>el.substr(0,4)==Year && el.substr(5,2)===month)
     
      let newUserDay=[]
     for(let i=0;i<day;i++){
       newUserDay[i]=newUserMonth.filter(el=>el.substr(8,2)==i).length
     }
      res.send(newUserDay)
      doc=doc1
    }
  })
})





app.listen(port, () => console.log("we can do 3ejja mergaz here '" + port + "' bow!"))




