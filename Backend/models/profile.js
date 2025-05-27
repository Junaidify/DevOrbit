const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  skill: {
    type: Array,
    required: true,
  },
  bio: {
    type: Array,
  },
  socialMediaHandle: {
    type: Object,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
