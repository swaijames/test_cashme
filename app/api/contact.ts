import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, mobileNumber, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'rodgers.itslltd@gmail.com',
      subject: `New contact form submission from ${firstName} ${lastName}`,
      text: `You have a new contact form submission:
      Name: ${firstName} ${lastName}
      Mobile Number: ${mobileNumber}
      Email: ${email}
      Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
