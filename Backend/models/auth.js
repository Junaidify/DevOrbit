const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match : /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    unique : true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role : {
   type : String, 
   required : true, 
   default: 'user', 
   enum : ['user', 'admin']
  }
});

const Auth = mongoose.model('Auth', authSchema); 
module.exports = Auth; 
