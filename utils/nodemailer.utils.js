import nodemailer from "nodemailer";
import { generateTemplate } from "./emailTemplate.utils.js";
import dotenv from 'dotenv';
dotenv.config(); 
import { config } from '../config/config.js';


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: config.account_email,
    pass: config.nodemailer_password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


export const mailSend = async (user, token) => {
  try {
    // Debug logs to verify config values
    console.log("Email config check:", {
      user: config.account_email ? `Email defined: ${config.account_email}` : "Email MISSING",
      pass: config.nodemailer_password ? "Password defined (hidden)" : "Password MISSING"
    });
    
    const info = await transporter.sendMail({
      from: config.account_email,
      to: user.email,
      subject: "Welcome!",
      text: "Thanks for signing up!",
      html: generateTemplate(user.name, `http://localhost:5000/api/v1/verification?token=${token}`),
    });

    console.log("Mail sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Mail send error:", error);
    throw error;
  }
};


// export const mailSend = async (user , token) => {
//   try {
  
//     const info = await transporter.sendMail({
//       from: config.account_email,
//       to: user.email,
//       subject: "Welcome!",
//       text: "Thanks for signing up!",
//       html: generateTemplate(user.name , `http://localhost:5000/api/v1/verification?token=${token}` ),
//     });

//     console.log("Mail sent:", info.messageId);
//     return info;  // return info so caller can check success
//   } catch (error) {
//     console.error("Mail send error:", error);
//     throw error;  // rethrow to propagate to caller
//   }
// };
