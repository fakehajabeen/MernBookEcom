const express = require('express');
const cors = require('cors');
const connectDB = require('.');
const router = require('../routes');
require('dotenv').config();
const mongoose = require('mongoose');
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

const MONGO_URI = "mongodb+srv://fakeha26:rahmat26@mern.3z9ik.mongodb.net/?retryWrites=true&w=majority&appName=MERN"; // Replace with your connection string

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// connectDB()
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((err) => {
//         console.error('Error connecting to the database:', err);
//     });

app.use('/api', router);

app.get('/', (req, res) => {
    res.send("hello ecom");
});

module.exports = app;
