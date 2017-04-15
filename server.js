var express = require('express')
var app = express()
var devices = 0;
var db = [];

app.get('/',function(req,res){
  res.send(db)

})

app.post('/:id/:type/:time',function(req,res){
  res.send()
  db.push(req.params)
})

app.get('/register',function(req,res){
  devices+=1;
  res.send({'id':devices})
})

app.get('/devices',function(req,res){
  res.send(devices.toString())
})

app.listen(3000)




























/*// content of index.js
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
/*
require("http").createServer(function (req, res) {
     res.end("Hello from server started by Electron app!");
 }).listen(9000)
*/
