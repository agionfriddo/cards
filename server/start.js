'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const passport = require('passport')

const pkg = require('APP')

const app = express()

if (!pkg.isProduction && !pkg.isTesting) {
  app.use(require('volleyball'))
}

const server = app.listen(3000, () => {
  console.log('listening on port 3000');
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.emit('news', {hello: 'world'})
  console.log('user connected');

  socket.on('my other event', (data) => {
    socket.broadcast.emit('post', {someone: 'entered'})
  })

  socket.on('disconnect', (socket) => {
    console.log('user disconnected');
    io.emit('user disconnected')
  });
});


module.exports = app
  // We'll store the whole session in a cookie
  .use(require('cookie-session') ({
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
