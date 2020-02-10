const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const port = process.env.Port||3000
const route = require('./routes/routes')
const logger = require('morgan')


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use('/api/users',route)


//app.get('/',route)
























app.listen(port,()=>{
    console.log(`listening on ${port}`)
})