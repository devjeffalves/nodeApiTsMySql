//import app from './app';
import dotenv from 'dotenv';
const express = require("express")
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log('Lets code'));
