const express = require('express');
const cors = require('cors');
const connect_db = require('./config/db_connect');

const app = express();

app.use(cors());
app.use(express.json());

// import schema 

connect_db();

app.listen(process.env.PORT, () => {
   console.log("Server is running...")
})


