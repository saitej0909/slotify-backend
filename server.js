require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const app = express();
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});
// Middleware
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 100 }));

// Routes
app.get('/api/ping', (req, res) => res.send('Pong 🏓'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
