const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const mongoose = require('mongoose');
const connectDb = require('./config/connectDb');

//config dotenv file
dotenv.config();

//database calling
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use (express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transections routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});