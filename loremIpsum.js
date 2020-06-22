const https = require('https');
const EventEmitter = require('events');

class LoremIpsum extends EventEmitter {

    constructor(p_number, p_length, headers) {
        // call the parent's constructor method and gets access to the parent's properties and methods
        super(); // the same as EventEmitter.call(this, ...); 
        
        this.p_number = p_number; // paragraphs number
        this.p_length = p_length; // paragraph length
        this.headers = headers || '';   // with or without headers
        
        this.request = https.get(`https://loripsum.net/api/${this.p_number}/${this.p_length}/${this.headers}`, res => {
            
            let content = ''; 
            
            if (res.statusCode !== 200) {
                request.abort();
                const err = new Error(`Status Code: ${http.STATUS_CODES[res.statusCode]}`); 
                console.log('Error fetching data!', err);
            } else {
                res.on('data', chunk => content += chunk);
                res.on('end', () => this.emit('end', content));
                res.on('error', err => this.emit('error', err));
            }
        });
    }
}

 module.exports.LoremIpsum = LoremIpsum;

