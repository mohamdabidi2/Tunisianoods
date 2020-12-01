const mongoose = require('mongoose')
var schema = mongoose.Schema
RuleSchema = new schema({
    UserName: { type: String, required: true },
    UseRole: { type: String, required: true },
    userPhoto: { type: String, required: true ,default:"zzz"},
    RuleTitle: { type: String, required: true },
    Rules: { type: Array, required: true},
    RoleType: { type: String, required: true },
    DateCreation: { type: Date, required: false, default: new Date().toDateString() }







})


var Rule = mongoose.model('Rules', RuleSchema)
module.exports = Rule;
