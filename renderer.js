const fs = require('fs');

const view = async (template, value, res) => {
    let file = fs.readFileSync(`./views/${template}.html`, { encoding: 'utf-8'});
    file = file.replace(/Key/, value);
    res.write(file); 
};

module.exports.view = view; 