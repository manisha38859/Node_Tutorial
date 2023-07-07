const http = require('http')

const server = http.createServer((req,res)=> {
    console.log(req)
    // res.write('Welcome to our home page')
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        //BLOCKING CODE!!!
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`) 
            }
        }

        
        res.end('Here is our short history')
    }
res.end(`
      <h1>Oops!!!</h1>
      <p>We can't seem to find page you are looking for</p>
      <a href="/">back home</a>
`)
}) 

server.listen(5000)