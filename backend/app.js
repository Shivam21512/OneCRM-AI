const express = require('express');
const app = express();

const cors = require('cors');
const connectDB = require("./db/index.js");
const userRoutes = require("./routes/user.routes.js");
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});





