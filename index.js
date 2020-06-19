const http = require('http');
const static = require('node-static');
const router = require('./router');
const { port } = require('./config'); 

const file = new static.Server('./public');

const server = http.createServer((req, res) => { 
    // req.on('end', () => {
    //     file.serve(req, res);
    // }).resume();
    router.home(req, res); 
});

server.listen(() => {
    console.log(`Your port is ${port}`);
});
