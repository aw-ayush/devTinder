const express = require('express')
const connectDB = require('./config/database')
const User = require('./models/user')
const app = express()

app.post('/signup', async (req, res)=>{

    const user = new User({
        firstName: "Ayush",
        lastName: "Awasthi",
        email: "ayush@gamil.com",
        password: "Ayush@123",
        age: "32",
        gender: "Male"
    })
    try{
        await user.save()
        res.send('User saved successfully')
    }
    catch(err){
        console.log('')
        res.status(400).send("Error saving the user.. "+ err.message)
    }
    
})

connectDB()
    .then(()=>{
        console.log('Database connected successfully')
        app.listen(7777, ()=>{
        console.log('Server is successfully listining on 3000 port...')
    })
    })
    .catch((err)=>{
        console.log('Can not connected to Database'+ err)
    })

