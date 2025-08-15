const mongoose = require("mongoose");
const URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(URI); 
    console.log(`Connection successfull at port ${URI}`);
  } catch (error) {
    console.log(`Error occured while connection ${error}`);
  }
};

module.exports = connectDB;
