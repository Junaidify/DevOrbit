const Profile = require("../models/profile");

exports.profile = async (req, res) => {
  try {
    const { image, skill, bio, socialMediaHandle } = req.body;

    if (!skill) {
      return res.status(400).json({ message: "Skill section can't be empty" });
    }

    await Profile.create({
      userId: req.user._id,
      image,
      skill,
      bio,
      socialMediaHandle,
    });

    return res.status(201).json({ message: "Profile is created" });
  } catch (err) {
    return res.stauts(400).json({ message: "Failed to created profile" });
  }
};
