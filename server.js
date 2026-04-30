import express from 'express';
import twilio from 'twilio';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    console.log('NEW FORM SUBMISSION:', req.body); // debug

    await client.messages.create({
      body: `🎹 NEW ENQUIRY

👤 ${name}
📧 ${email}
📌 ${subject}

💬 ${message}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.YOUR_PHONE,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
});

app.listen(3001, () => {
  console.log('🔥 Server running on http://localhost:3001');
});