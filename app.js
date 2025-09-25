require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: "ok" });
});

app.post('/api/chat', async (req, res) => {
  const userMsg = req.body.message || "";
  if (userMsg.toLowerCase().includes("help")) {
    return res.json({ answer: "Sure, how can I help you with CloudKaroPay?" });
  }
  // optionally forward to chatbot service later
  return res.json({ answer: "I'm the backend. Try asking something else." });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
