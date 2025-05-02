const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use provided URI or default to localhost if not provided
    console.log(process.env.MONGODB_URI);
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/webpe_stories';
    
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 