const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('resonse',(name, id) =>{
    console.log(`data recieved from user ${name} with id: ${id}`)
})

customEmitter.on('resonse',() =>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','john',34)