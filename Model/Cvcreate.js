const mongoose = require("mongoose");
const CvSchema = mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
 firstname: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },

  number:{
    type:Number,
    required:true
  },
  summary:{
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
 skills: {
    type: Array,
    required: true
  },
  social: {
    type: Array,
    required: true
  },
  education: {
    type: Array,
    required: true
  },
  experience: {
    type: Array,
    required: true
  },
  project: {
    type: Array,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});
module.exports = mongoose.model("Cv", CvSchema);
