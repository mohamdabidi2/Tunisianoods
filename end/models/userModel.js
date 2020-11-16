const mongoose=require ('mongoose')
var schema=mongoose.Schema
userSchema=new schema ({
FullName:{type:String,required:true},
Email:{type:String,required:true},
Password:{type:String,required:true},
DiscordID:{type:String,required:true},
verifiedEmail:{type:Boolean,default:false},
IsAdmin:{type:Boolean,default:false},
Emailtoken: { type: String, required: true },
DateInscription: { type: Date, required: false ,default:new Date().toDateString()}





})


var User=mongoose.model('users',userSchema)
module.exports = User;
