import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../db/models/user.models.js';
import dotenv from 'dotenv';
dotenv.config(); 
import { config } from '../config/config.js';


export const verificationRouter = express.Router();


verificationRouter.get('/' , async (req , res) => {

const token = req.query.token;

try {
  const decoded = jwt.verify(token, config.jwtSecret);

  // Example payload structure: { userId: 'abc123', email: 'x@y.com', iat: 12345678 }

  const userId = decoded.userId; // or whatever you encoded
  const email = decoded.email;

  // Now find user in DB and verify them
  const user = await User.findOne({ email });

  if (!user){
    return res.status(404).send("User not found");
  } 
 
  if(user.verified) return res.send("Your email id is already verified");

  user.verified = true;
  await user.save();

  res.send("Email verified successfully from verification route!");
} catch (error) {
    console.log("Invalid or expired token from verification route!", error);
  res.status(400).send("Invalid or expired token from verification route!");
}

});