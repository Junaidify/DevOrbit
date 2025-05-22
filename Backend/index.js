const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const router = require('./routes/auth')
const path = require('path')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

connectDB();
app.use('/', router);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname))

app.get('/signin', (req, res) => {
   res.render('server');
})


app.listen(process.env.PORT, () => {
   console.log("Server is running...")
})


