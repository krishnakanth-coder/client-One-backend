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

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/youtube', youtubeRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
