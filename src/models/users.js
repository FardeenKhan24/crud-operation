const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/crud")

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const userModel = mongoose.model("users",userSchema)
module.exports = userModel