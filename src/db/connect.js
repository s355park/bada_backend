const express = require("express")
const mongoose = require("mongoose")
const app = express();
const { MONGODB_URI } = require("../constants");

const connect = async() => {
    try {
        console.log("tried")
        await mongoose.connect(MONGODB_URI)
        console.log("connected to MongoDB")
    } catch (error) {
        console.error(error)
    }
    
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
    return mongoose;
}

module.exports = connect;



// console.log(account)
