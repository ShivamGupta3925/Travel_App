require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

    

const hotelDataAddedToDBRouter=require("./routes/dataimport.router");
const categoriesDataAddedToDBRouter=require("./routes/categoryimport.router");

const hotelRouter = require('./routes/hotel.router');
const categoryRouter=require('./routes/category.router'); 
const singleHotelRouter=require("./routes/singlehotel.router");
const authRouter=require("./routes/auth.router")
const wishlistRouter=require("./routes/wishlist.router");

const connectDB = require('./config/dbconfig');

const app = express();

app.use(express.json()); // Parse JSON payloads

connectDB(); // Connect to MongoDB

const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send('Hello Geeks');
});
app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use('/api/hotels', hotelRouter); 
app.use("/api/categorydata",categoriesDataAddedToDBRouter);
app.use("/api/category",categoryRouter);
app.use("/api/hotels",singleHotelRouter);// Use hotel routes
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);

mongoose.connection.once('open', () => {
    console.log('Connected to DB');
});

app.listen(PORT, () => {
    console.log(`Server is UP and Running on port ${PORT}`);
});
