const http = require('http')

const server = http.createServer((req,res)=> {
    console.log(req)
    // res.write('Welcome to our home page')
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
res.end(`
      <h1>Oops!!!</h1>
      <p>We can't seem to find page you are looking for</p>
      <a href="/">back home</a>
`)
}) 

server.listen(5000)