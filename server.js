const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const youtubeRoutes = require('./routes/youtubeRoutes.js');

const app = express();

// dotenv config
dotenv.config();

// config db
connectDB();

// CORS options
const corsOptions = {
  origin: ['https://myview-dd7u.onrender.com', 'http://localhost:3000'], // Support multiple origins
  credentials: true, // Allow cookies or credentials
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/youtube', youtubeRoutes);

// Port with fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
