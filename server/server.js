const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const storyRoutes = require('./routes/storyRoutes');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// API Routes
app.use('/api/stories', storyRoutes);

// Set static folder - be explicit about the path
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Any route that is not api will be redirected to index.html
app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname, '../client/build/index.html');
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Mode: ${process.env.NODE_ENV || 'development'}`);
}); 