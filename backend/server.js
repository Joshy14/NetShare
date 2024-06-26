const { WebSocketServer } = require('ws');
const http = require('http');

// Spinning the HTTP server and the WebSocket server.
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});

// I'm maintaining all active connections in this object
const clients = {};

// A new client connection request received
wsServer.on('connection', function(connection) {
  // Generate a unique code for every user
  
  console.log(`Received a new connection.`);

  // Store the new connection and handle messages
  //clients[userId] = connection;
  console.log(` connected.`);
});




