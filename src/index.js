const { isObject } = require('util');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 4000

io.on('connection', function(socket) {
  console.log('a user connected');
});

http.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
})