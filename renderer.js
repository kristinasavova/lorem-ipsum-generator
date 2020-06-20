const fs = require('fs');

const view = (template, value, res) => {
    let file = fs.readFileSync(`./views/${template}.html`, { encoding: 'utf-8'});
    file = file.replace(/Content/, value);
    res.write(file); 
};

module.exports.view = view; 