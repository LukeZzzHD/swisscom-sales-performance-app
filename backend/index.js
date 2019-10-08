// Import npm modules
const express = require('express');
const CONFIG = require('./config');
const bodyParser = require('body-parser');
const getApiRouter = require('./routers');
const mongoose = require('mongoose');

const app = express();
app.set('Secret', CONFIG.SECRET);

// Middleware
app.use(bodyParser.json());
app.use('/api', getApiRouter());

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/salesperformance', { useNewUrlParser: true, useUnifiedTopology: true });

// Start server
const PORT = process.env.PORT || CONFIG.PORT;
app.listen(PORT, err => {
	err ? console.error(err) : console.log(`Api running on port ${CONFIG.PORT}`);
});
