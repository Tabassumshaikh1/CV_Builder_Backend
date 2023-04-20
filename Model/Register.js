const mongoose = require("mongoose");
const RegisSchema = mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
},
  password: {
    type: String,
    required:true
},
  contactNumber: {
    type: String,
    required:true
  },
  status: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Register", RegisSchema);
