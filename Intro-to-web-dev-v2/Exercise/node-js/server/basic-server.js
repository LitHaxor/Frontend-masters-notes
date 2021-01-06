const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('<h1>BRRRRRRRRRUH</h1>');
});

console.log("listening on http://localhost:3000");
server.listen(3000);