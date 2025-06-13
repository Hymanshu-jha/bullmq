# Email Verification System using Node.js, Express, BullMQ, and Nodemailer

This project implements a modern email verification system commonly used in account creation workflows. It includes background job processing with BullMQ and Redis, secure token-based verification with JWT, and email sending using Nodemailer. HTML-based emails are used for a professional look and clear user communication.

---

## Features

- Email verification via link
- Nodemailer for sending HTML emails
- Background email job queue with BullMQ and Redis
- JWT-based secure token handling
- Cookie-based session management
- Environment-based configuration

---

## Tech Stack

- Node.js
- Express.js
- BullMQ
- Redis
- Nodemailer
- JWT
- Cookies (HTTP-only, Secure, SameSite)

---

## How It Works

1. **User Signup**
   - User submits their email address during registration.
   - Server generates a 6-digit code or token and enqueues an email job.

2. **Email Sent**
   - BullMQ adds the job to Redis.
   - A background worker processes the queue and sends a verification email using Nodemailer.

3. **Email Verification**
   - User clicks the verification link or enters the 6-digit code.
   - Server validates the token/code and updates the user status.

---

git clone https://github.com/Hymanshu-jha/bullmq_email_verification.git

