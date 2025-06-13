import User from '../db/models/user.models.js';
import bcrypt from 'bcryptjs';
import addJobs from '../utils/generateQueue.utils.js';
import generateToken from '../utils/tokens.utils.js';
import dotenv from 'dotenv';
dotenv.config(); 
import { config } from '../config/config.js';




export const signup =  async (req, res) => {
  try {
    const { name , password , phone, email } = req.body;


    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, Number(config.hashRounds));

    // Create user
    const user = new User({ name, password: hashedPassword , phone, email});
    await user.save();

    // Generate token
    const token = generateToken(user);
    
    try {
      await addJobs(user, token);
    } catch (error) {
      console.log('error while adding jobs from signup routes ', error);
    }

    

    res.json({ token });
  } catch (error) {
   console.error('Signup error:', error);  // Log the real error
  res.status(500).json({ message: 'Server error---111', error: error.message });
  }
}



export const signin = async (req, res) => {
  try {
    const { password, email } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate token
    const token = generateToken(user);
    res.json({ token });

  } catch (error) {
   console.error('Signup error:', error);  // Log the real error
  res.status(500).json({ message: 'Server error---111', error: error.message });
  }
}


export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Signup error:', error);  // Log the real error
  res.status(500).json({ message: 'Server error---111', error: error.message });
  }
}