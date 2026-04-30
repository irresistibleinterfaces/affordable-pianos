import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    await client.messages.create({
      body: `🎹 New Piano Enquiry

Name: ${name}
Email: ${email}
Subject: ${subject}

${message}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.YOUR_PHONE,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}