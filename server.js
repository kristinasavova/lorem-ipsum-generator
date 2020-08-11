const http = require('http');
const router = require('./router'); 
const port = process.env.PORT || 3000;

http.createServer((req, res) => { 
    router.routes(req, res);
}).listen(port, err => {
    if (err) throw err; 
    console.log(`Your port is ${port}`);
});
