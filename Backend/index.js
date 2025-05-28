const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const router = require('./routes/auth')
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());

connectDB();
app.use('/', router);

app.listen(process.env.PORT, () => {
   console.log("Server is running...")
})


