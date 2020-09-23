require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
//const dbConnection = require('./db/index.js');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, () =>  console.log(`App listening on ${PORT}`));