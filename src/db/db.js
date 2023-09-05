const Account = require("./models/accountSchema")
const express = require("express")
const mongoose = require("./connect")
const app = express();




const firstAccountCreation = async(id, userName, email, pwd, school) => {
    const account = new Account({
        id: id,
        username: userName,
        email: email,
        password: pwd,
        school: school
    });
    
    await account.save()
}


