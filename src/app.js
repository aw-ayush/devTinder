const express = require('express')

const app = express()

app.use('/test', (req, res)=>{
    res.send('Hello from server now')
})

app.listen(7777, ()=>{
    console.log('Server is successfully listining on 3000 port...')
})