const renderer = require('./renderer'); 
const { getLI } = require('./loremIpsum');

const home = (req, res) => {

    const LI = new getLI();
    
    if (req.url = '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        LI.on('end', content => {
            if (content) {
                renderer.view('index', content, res);
                res.end();
            }
        }); 
    }
}; 

module.exports.home = home; 