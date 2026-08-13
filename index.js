const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('join', (name) => {
    const clientName = (name || 'Guest').trim() || 'Guest';
    socket.data.name = clientName;

    socket.emit('system_message', {
      type: 'info',
      text: `Welcome, ${clientName}!`
    });

    socket.broadcast.emit('system_message', {
      type: 'join',
      text: `${clientName} joined the chat.`
    });
  });

  socket.on('chat_message', (message) => {
    const text = String(message || '').trim();
    if (!text) return;

    const payload = {
      name: socket.data.name || 'Guest',
      text,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    io.emit('chat_message', payload);
  });

  socket.on('typing', (isTyping) => {
    const payload = {
      name: socket.data.name || 'Someone',
      isTyping: Boolean(isTyping)
    };

    socket.broadcast.emit('typing', payload);
  });

  socket.on('disconnect', () => {
    const name = socket.data.name || 'A user';
    socket.broadcast.emit('system_message', {
      type: 'leave',
      text: `${name} left the chat.`
    });
  });
});

server.listen(3000, () => {
  console.log('listening on port http://localhost:3000');
});
