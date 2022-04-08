const api = require('./api.json');
const https = require('https');
const http = require('http');

// Function to get definition for input word
const define = word => {
 // Request Data
 const request = https.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${api.key}`, res => {

   let dataStream = '';
   res.on('data', chunk => {
    dataStream += chunk;
   });

   res.on('end', () => {
    // Parse the data
    const definition = JSON.parse(dataStream);

    // Print the data
    console.log(definition[0].shortdef[0]);
   });

 });
}

define('livestock');