import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to DATABASE Successfully');
  } catch (error) {
    console.log('ERROR while connecting to MONGODB', error);
    process.exit(1);
  }
};

export default connectMongoDB;
