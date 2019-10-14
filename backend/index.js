// Import npm modules
const express = require('express');
const CONFIG = require('./config');
const bodyParser = require('body-parser');
const getApiRouter = require('./routers');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.set('Secret', CONFIG.SECRET);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', getApiRouter());
app.use('/profile_pictures', express.static('uploads/profile_pictures'));
app.use('/', express.static(path.join(__dirname, '/../frontend/build/')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
});

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/salesperformance', { useNewUrlParser: true, useUnifiedTopology: true });

// Start server
const PORT = process.env.PORT || CONFIG.PORT;
app.listen(PORT, err => {
    err ? console.error(err) : console.log(`Api running on port ${CONFIG.PORT}`);
});
