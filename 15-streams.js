const { createReadStream } = require('fs')
const { size } = require('lodash')
const { getDefaultHighWaterMark } = require('stream')

const stream = createReadStream('../content/big.txt',{
    highWaterMark: 90000,
    encoding: 'utf8',
})

// default 64kb
// last buffer - remainder
// HighWaterMark - control size
// const stream = createReadStream('./content/big.txt',{ high water mark : 90000})
// const stream = createReadStream('../content/big.txt',{ encoding : 'utf8'})

stream.on('data',(result) => {
    console.log(result)
})
stream.on('error',(err)=> console.log(err))