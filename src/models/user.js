const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minLength: 4
    },
    lastName: {
        type: String,
        rewuired: true
    },
    emailId: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        validate(value){
            if(!['male', 'female', 'others'].includes(value)){
                throw new Error('Gender is not valid!')
            }

        }
    },
    photoUrl: {
        type: String,
        default: "https://lectures.pi2.in/wp-content/uploads/2016/08/dummy-prod-1.jpg"
    },
    about: {
        type: String,
        default: "This is a default of the user!"
    },
    skills: {
        type: [String],

    }
}, 
{
    timestamps: true
})


module.exports = mongoose.model("User", userSchema)