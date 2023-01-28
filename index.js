const express = require('express')

const app = express()
const cors = require("cors")
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=> res.send('hello'))

app.listen(8080,()=>{  console.log('server statrted on port 8080')})