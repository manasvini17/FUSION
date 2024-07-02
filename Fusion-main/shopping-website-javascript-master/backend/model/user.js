const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    confirmpassword:{
        type: String
    }
})

const User = mongoose.model("User", userData)
module.exports = User