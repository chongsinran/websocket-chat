const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
require('dotenv').config();
dotenv.config();
const initializeWebSocketServer = require('./modules/realtime/v1/config/websocketConfig');
const app = express();
const path = require('path');



//host a simple chat html
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});


const server = http.createServer(app);
// Initialize WebSocket to hosting server
const wss = initializeWebSocketServer(server); 


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('hosting at :' + 'http://localhost:3000')
});


