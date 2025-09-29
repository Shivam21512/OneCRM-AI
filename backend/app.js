const express = require('express');
const app = express();

const cors = require('cors');
const connectDB = require("./db/index.js");



connectDB();

