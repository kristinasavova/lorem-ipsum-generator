const querystring = require('querystring');
const renderer = require('./renderer'); 
const { LoremIpsum } = require('./loremIpsum');

/**
 * A function to build routes
 * @param {object} req 
 * @param {object} res 
 */
const routes = (req, res) => {

    /* GET Home route '/' */
    if (req.url === '/') {   
        if (req.method.toLowerCase() === 'get') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            renderer.view('header', '', res);
            renderer.view('form', '', res); 
            renderer.view('footer', '', res);
            res.end();
        } else {
    /* POST Home route '/' */
            req.on('data', body => { 
                const query = querystring.parse(body.toString()) // from buffer to string, from string to object
                const { p_number, p_length, headers } = query;
                if (headers) {
                    res.writeHead(303, { 'Location': `/${p_number}/${p_length}/${headers}` });
                } else {
                    res.writeHead(303, { 'Location': `/${p_number}/${p_length}` });
                }
                res.end();
            });
        }
    /* GET Lorem Ipsum route /:p_number/:p_length/:headers */
    } else if (req.url !== '/' && req.url !== '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const parameters = req.url.split('/'); // get parameters from the URL
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

module.exports.routes = routes; 