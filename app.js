const api = require('./api.json');
const https = require('https');
const http = require('http');

// Function to get definition for input word
const define = word => {
 // Request Data
 const request = https.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${api.key}`, res => {

   // combine data chuncks into a single string, dataStream.
   let dataStream = '';
   res.on('data', chunk => {
    dataStream += chunk;
   });

   res.on('end', () => {
    // Parse the dataStream string as JSON
    let definition = JSON.parse(dataStream);

    // Store the definition as a string
    definition = definition[0].shortdef[0];

    // Print the data - make first letter capitalized, and add a period at end of definition.
    console.log(`${definition[0].toUpperCase()}${definition.slice(1)}.`);
   });

 });
}

define('livestock');