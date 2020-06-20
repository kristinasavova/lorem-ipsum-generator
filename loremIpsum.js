const https = require('https');
const EventEmitter = require('events');

class getLI extends EventEmitter {

    request = https.get('https://loripsum.net/api/2/medium/headers', (res) => {

        let content = ''; 

        if (res.statusCode !== 200) {
            request.abort();
            const err = new Error(`Status Code: ${http.STATUS_CODES[res.statusCode]}`); 
            console.log('Error fetching data!', err);
        }
        
        res.on('data', (chunk) => {
            content += chunk;
        });

        res.on('end', () => {
            this.emit('end', content);
        });

        res.on('error', (err) => {
            console.log(err); 
            this.emit('error', err);
        });
    });
}

 module.exports.getLI = getLI;

