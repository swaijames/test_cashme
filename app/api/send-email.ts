// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { firstName, lastName, mobileNumber, email, message } = req.body;

        // Log the environment variables for debugging
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: email,
            to: 'rodgers.itslltd@gmail.com', // Ensure this is the correct recipient email
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission:\n\nName: ${firstName} ${lastName}\nMobile Number: ${mobileNumber}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send email
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error); // Log the error
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default handler;
