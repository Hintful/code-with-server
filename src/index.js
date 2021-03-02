const { isObject } = require('util');

const PORT = 4000
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
// const io = require('socket.io')(http);


io.on('connection', function(socket) {
  socket.on("new-op", function(data) {
    io.emit("new-remote-op", data);
  })
});

http.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
})