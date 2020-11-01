const mongoose=require ('mongoose')
var schema=mongoose.Schema
userSchema=new schema ({
FullName:{type:String,required:true},
Email:{type:String,required:true},
Password:{type:String,required:true},
DiscordID:{type:String,required:true},
verifiedEmail:{type:Boolean,default:false}




})


var User=mongoose.model('users',userSchema)
module.exports = User;
