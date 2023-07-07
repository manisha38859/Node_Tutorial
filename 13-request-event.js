const { appendFile } = require('fs')
const http = require('http')
const { it } = require('node:test')

const server = http.createServer((req,res) => {
    res.end('welcome')
})

// using Event Emitter API 
const server = http.createServer()
// emits request Event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res) => {
    res.end('welcome')
})

server.listen(5000)