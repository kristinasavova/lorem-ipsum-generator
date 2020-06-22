const querystring = require('querystring');
const renderer = require('./renderer'); 
const { LoremIpsum } = require('./loremIpsum');

const home = (req, res) => {

    if (req.url === '/') {
        if (req.method.toLowerCase() === 'get') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            renderer.view('header', '', res);
            renderer.view('form', '', res); 
            renderer.view('footer', '', res);
            res.end();
        } else {
            req.on('data', body => { 
                const query = querystring.parse(body.toString()) // from buffer to string, from string to object
                const { p_number, p_length, headers } = query;
                res.writeHead(303, { 'Location': `/${p_number}/${p_length}/${headers}` });
                res.end();
            });
        }
    } else if (req.url !== '/' && req.url !== '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const parameters = req.url.split('/');
        const LI = new LoremIpsum(parameters[1], parameters[2], parameters[3]);
        LI.on('end', content => {
            renderer.view('header', '', res);
            renderer.view('form', '', res);
            renderer.view('content', content, res);
            renderer.view('footer', '', res);
            res.end();
        });
        LI.on('error', err => {
            renderer.view('header', '', res);
            renderer.view('form', '', res);
            renderer.view('error', err.message, res);
            renderer.view('footer', '', res); 
            res.end(); 
        });
    }
}; 

module.exports.home = home; 