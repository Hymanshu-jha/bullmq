import dotenv from 'dotenv';

dotenv.config(); // Load .env variables into process.env

export const config = {
  port: process.env.PORT || 5000,
  nodemailer_password: process.env.NODEMAILER_PASSWORD,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientURL: process.env.CLIENT_URL || 'http://localhost:3000',
  account_email: process.env.ACCOUNT_EMAIL,
  hashRounds: Number(process.env.HASH_ROUNDS) || 10,  // convert to number
};
