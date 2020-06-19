const http = require('http');
const { port } = require('./config'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end();
});

server.listen(() => {
    console.log(`Your port is ${port}`);
});
