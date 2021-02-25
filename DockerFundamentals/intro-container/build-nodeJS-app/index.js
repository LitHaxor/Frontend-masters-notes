const http = require('http');

const app = {
    port: 5001
}

app.createServer = http.createServer((req,res)=>{
    res.end('lol', 'utf-8');
});

app.createServer.listen(app.port);
console.log(`Server started at http://localhost:${app.port}`);