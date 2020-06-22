const http = require('http');
const router = require('./router');
const { port } = require('./config'); 

http.createServer((req, res) => { 
    router.routes(req, res);
}).listen(port, 'localhost', err => {
    if (err) throw err; 
    console.log(`Your port is ${port}`);
});
