import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config(); 
import { config } from '../../config/config.js';


export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);
        console.log('MongoDB connected successfully!!');
    } catch (error) {
        console.log('Error occured while connecting to DB', error);
        process.exit(1);
    }
}