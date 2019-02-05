var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/templates/index.html'));
});

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});