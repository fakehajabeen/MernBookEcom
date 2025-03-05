const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes');
require('dotenv').config();
const mongoose= require('mongoose')
const cookieParser = require('cookie-parser')




const app= express();
app.use(cookieParser())
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, // Replace with the exact URL of your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));

require('./config/db');
app.use('/api', router);
const PORT =  8080;
   //mongoose.connect('mongodb://127.0.0.1/bookstore')          
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('Connected to the database');
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });


// app.listen(4000,()=>{
//     console.log('server is running')
// })



// Enable CORS



app.get('/', (req,res) =>
{
    res.send("hello ecom");
}
);