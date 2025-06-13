import express from 'express';
import { authMiddleware } from '../middlewares/authorize.middlewares.js';
import { signup , signin , profile } from '../controllers/users.controllers.js';


const userRouter = express.Router();

// SignUp route
userRouter.post('/signup', signup);

// Login route
userRouter.post('/signin', signin);

// Protected route example
userRouter.get('/profile', authMiddleware, profile);



export default userRouter;