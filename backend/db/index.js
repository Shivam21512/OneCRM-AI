const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;