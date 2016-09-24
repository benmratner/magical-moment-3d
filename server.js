var http = require('http'),
    express = require('express'),
    path = require('path');
var app = express();

const PORT = process.env.PORT || 3006;

app.get('/', function(req, res) {
    res.sendFile((path.join(__dirname + '/index.html')));

});

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
