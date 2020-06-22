const fs = require('fs');

/**
 * A function to view HTML templates
 * @param {string} template - HTML template to render 
 * @param {string} value - a string to render instead of 'Key'
 * @param {object} res - a response object 
 */
const view = async (template, value, res) => {
    let file = fs.readFileSync(`./views/${template}.html`, { encoding: 'utf-8'});
    file = file.replace(/Key/, value);
    res.write(file); 
};

module.exports.view = view; 