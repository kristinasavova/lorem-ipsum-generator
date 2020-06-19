
const dotenv = require('dotenv');

/**
 * Read the .env file, assign the variables to process.env 
 * @return {object}
 */
dotenv.config();

module.exports = {
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    port: process.env.PORT
}; 