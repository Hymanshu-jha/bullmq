import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config(); 
import { config } from '../config/config.js'; // same secret as above

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Expect "Bearer TOKEN"

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded; // attach decoded user info to request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
