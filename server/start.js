'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const pkg = require('APP');
const db = require('APP/db');

const app = express()

if (!pkg.isProduction && !pkg.isTesting) {
  app.use(require('volleyball'))
}

  const server = app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
  db.sync()
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('input', ({ opponentText, groupId }) => {
    socket.broadcast.to(groupId).emit('opponentTyping', { opponentText });
  });

  socket.on('correct', ({ opponentPoints, groupId }) => {
    socket.broadcast.to(groupId).emit('plusOpponent', { opponentPoints });
    socket.broadcast.to(groupId).emit('nextQuestion');
  });

  socket.on('setUpRoom', ({ groupId }) => {
    console.log("SOMEONE JOINED ROOM " + groupId)
    socket.join(groupId)
  });

  socket.on('leaveRoom', ({ groupId }) => {
    console.log("SOMEONE LEFT ROOM " + groupId);
    socket.disconnect();
    socket.leave(groupId);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
    socket.broadcast.emit('user disconnected');
  });
});


module.exports = app
  // We'll store the whole session in a cookie
  .use(require('cookie-session')({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  }))

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))

  // Serve our api
  .use('/api', require('./api'))

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))
