const { firstAccountCreation } = require("./db");
const mongoose = require("mongoose");
const { connect } = require("./connect");

const test = async() => {
    const connection = await connect(mongoose);
    
}