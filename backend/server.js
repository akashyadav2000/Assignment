const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000; // Default to port 5000 if PORT is not set in .env

// Middleware to parse JSON and handle CORS
app.use(express.json());

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL and port
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Import routes
const cardRoutes = require('./routes/cardRoutes');

// Use routes
app.use('/cards', cardRoutes);

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
