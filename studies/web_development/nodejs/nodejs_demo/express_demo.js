var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
    res.send('<h1> I love you Namki </h1>')
})

app.get('/tasks', function (req, res) {
    // res.send('<h1> I love you very much Namki </h1>')
    fs.readFile('./tasks.json', function (err, data) {
        var tasks = JSON.parse(data.toString()).tasks;
        res.json(tasks);
    })
})

var port = 3000;
server.listen(port, function(){
    console.log('Server is listening on port: ' + port);
})