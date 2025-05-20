const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
    type: Number,
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
