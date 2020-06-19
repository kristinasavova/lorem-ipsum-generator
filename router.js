const fs = require('fs');
const LoremIpsum = require('./loremIpsum');

const home = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const loremIpsum = new LoremIpsum(paragraphNumber, paragraphLength); 
        loremIpsum.on('end', textJSON => {
            console.log(textJSON);
            const file = fs.readFileSync('./views/index.html', { encoding: 'utf8' });
            res.write(file);
            res.end();
        });
        loremIpsum.on('error', err => {
            console.log(err);
            res.end(); 
        });
    }
}; 

module.exports.home = home; 