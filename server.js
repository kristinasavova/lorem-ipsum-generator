const http = require('http');
const static = require('node-static');
const router = require('./router');
const { port } = require('./config'); 

const file = new static.Server('./public');

http.createServer((req, res) => { 
    // req.on('end', () => {
    //     file.serve(req, res);
    // }).resume();
    router.home(req, res);
    
    
}).listen(port, 'localhost', err => {
    if (err) throw err; 
    console.log(`Your port is ${port}`);
});
