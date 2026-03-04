const mongoose = require('mongoose')

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://ayushawasthi7683:RoUo4L253TJVHSzs@namastenode.imyyoby.mongodb.net/devTinder")
}

module.exports = connectDB



