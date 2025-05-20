const mongoose = require("mongoose");

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.error("Failed to connect !");
    process.exit(1);
  }
};

module.exports = connect_db;
