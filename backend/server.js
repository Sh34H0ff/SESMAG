// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const logger = require('./middlewares/logger');

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
