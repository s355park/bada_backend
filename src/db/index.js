const { firstAccountCreation } = require("./db");
const mongoose = require("mongoose");
const { connect } = require("./connect");
const Account = require("./models/accountSchema")

const test = async() => {
    const connection = await connect(mongoose);

    await firstAccountCreation(
        connection,
        
    );

    
}