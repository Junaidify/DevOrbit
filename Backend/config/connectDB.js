const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.error("Failed to connect !");
    process.exit(1);
  }
};

module.exports = connectDB;
