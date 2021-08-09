var express = require('express')
var app = express()
app.use(express.json())

app.use('/', require('./routes/index'))

var port = process.env.port || 3000
app.listen(3000, ()=>{
    console.log('listning to port 3000')
})