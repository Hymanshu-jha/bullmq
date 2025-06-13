import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config(); 
import { config } from '../config/config.js';


const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };

  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });
};

export default generateToken;
