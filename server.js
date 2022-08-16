const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('hey hello')
    res.end()
})

const port = 3000
server.listen(port , ()=>{
    console.log("ready to go")

})