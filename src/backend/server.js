import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Pflichtfelder fehlen.' });
  }

  try {
    await transporter.sendMail({
      from: `"Stahl Computer Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@stahlcomputer.de',
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || '—'}\n\nNachricht:\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('E-Mail Fehler:', err);
    res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend läuft auf Port ${PORT}`));