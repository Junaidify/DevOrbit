const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db_connect');
const router = require('./routes/auth')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/', router);

app.listen(process.env.PORT, () => {
   console.log("Server is running...")
})


