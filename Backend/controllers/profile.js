const Profile = require("../models/profile");

exports.profile = async (req, res) => {
  const { image, skill, bio, socialMediaHandle } = req.body;

  if (!skill) {
    return res.status(400).json({ message: "Skill section can't be empty" });
  }

   const userSkill = Profile.create({image, });
   

};
