var http = require('http')
var fs = require('fs')

http
  .createServer(function (req,res) {
    // const text = fs.readFileSync('./content/big.txt','utf8')......file of big(nearly1.8mb) size
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{ //filestream  function to read and write data in chunks 
        fileStream.pipe() //pipe pushes from the readstream to writestream
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
  })
  .listen(5000)