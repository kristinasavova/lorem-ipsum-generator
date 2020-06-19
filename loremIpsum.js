const { EventEmitter } = require('events');
const https = require('https');
const http = require('http');

class myLoremIpsum extends EventEmitter {}
const loremIpsum = new myLoremIpsum(); 

const LoremIpsum = (paragraphNumber, paragraphLength) => {

    const request = https.get(`https://loripsum.net/api/${paragraphNumber}/${paragraphLength}`, (res) => {
        
        let body = ''; 
        
        if (res.statusCode !== 200) {
            request.abort();
            loremIpsum.emit ('error', new Error(`Oops! Error getting Lorem Ipsum! Status Code ${http.STATUS_CODES[res.statusCode]}`));
        } 

        res.on('data', (chunk) => {
            body += chunk;
            myEmitter.emit('data', chunk);
        });
        
        res.on('end', () => {
            if (res.statusCode === 200) {
                try {
                    const text = JSON.parse(body); // parse the data from string to JSON
                    loremIpsum.emit('end', text);
                } catch(err) {
                    loremIpsum.emit('error', err);
                }
            }
        })
            .on('error', err => {
                loremIpsum.emit('error', err);
        });
    });
};

module.exports = LoremIpsum;

