var express = require('express')
var app = express()

const admin = [{id:1, name:"Qasim siddique", age: 23, workinghours:6}]

module.exports.getadminServices = (req, res)=>{
    res.send(admin)
}