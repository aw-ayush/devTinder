const express = require('express')
const connectDB = require('./config/database')
const User = require('./models/user')
const app = express()
app.use(express.json())

app.post('/signup', async (req, res)=>{
    console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save()
        res.send('User saved successfully')
    }
    catch(err){
        console.log('')
        res.status(400).send("Error saving the user.. "+ err.message)
    }
    
})

app.get('/user', async (req, res)=> {
    const emailId = req.body.emailId
    try{        
        const user = await User.find({emailId: emailId})
        res.send(user);
    } catch(err){
        res.status(400).send('ERROR: ', err.message)
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

