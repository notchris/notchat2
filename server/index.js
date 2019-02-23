const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const moment = require('moment')

const clients = [];

io.sockets.on('connect', function(socket) {
    clients.push({
        id: socket.id
    })
    socket.emit('assign', {id: socket.id})
    
    socket.on('disconnect', function() {
        clients.splice(clients.indexOf(socket.id), 1);
        io.emit('update', {clients: clients})
    });
});

io.sockets.on('connection', function(socket) {
    io.emit('update', {clients: clients})
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});