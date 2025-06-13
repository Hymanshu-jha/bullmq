import express from 'express';
import cookieParser from 'cookie-parser';  // if using ES modules (type: module)
import { connectDB } from './db/DBconnection/connect.db.js';
import userRouter from './routes/students.routes.js';
import { verificationRouter } from './routes/verification.routes.js';
import dotenv from 'dotenv';
dotenv.config(); 

import { config } from './config/config.js';

const app = express();
const PORT = config.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/verification', verificationRouter);


const startApp = async () => {
try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

} catch (error) {
    console.log('Error in connectDB ', error);
}
}

startApp();

console.log("Env ACCOUNT_EMAIL:", process.env.ACCOUNT_EMAIL);
console.log("Env NODEMAILER_PASSWORD:", process.env.NODEMAILER_PASSWORD);
console.log("Config account_email:", config.account_email);
console.log("Config nodemailer_password:", config.nodemailer_password);




app.get('/', async (req, res) => {
    res.status(200).send('successfully implemented basic bullmq setup!!!');
});





