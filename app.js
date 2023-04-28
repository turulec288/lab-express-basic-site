// ...
// our first Route:

const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();
// ... the previously added code
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));


app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// cat route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
// ...
