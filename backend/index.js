const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');
const router = require('../routes');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: "https://mern-book-ecom-og7b.vercel.app",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

connectDB();

app.use('/api', router);

module.exports = app; // Required for Vercel serverless functions
