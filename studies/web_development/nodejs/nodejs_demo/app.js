// Import HTTP
var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();


var server = http.createServer(function (req, res){
    eventEmitter.emit('someone requested');
    res.end('Server Works');
});

eventEmitter.on('someone requested', function(){
    console.log('A request has been done on the server');
}); //Event Listener



var port = 3000;
server.listen(port, 'localhost', function (){
    console.log('Server started on port ' + port)
})

