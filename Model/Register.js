const mongoose = require('mongoose')
const RegisSchema = mongoose.Schema({
name:{
type:String
},
email:{
    type:String
},
password:{
    type:String
},
contactNumber:{
    type:String
},
status:{
    type:Boolean,
    default:true
},
created_at:{
    type:Date,
    default:Date.now
}

})
module.exports = mongoose.model("Register",RegisSchema)
