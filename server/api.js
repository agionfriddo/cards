'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ ok: true }))
  .use('/questions', require('./questions'))
  // .use('/sets', require('./sets'))
  // .use('/games', require('./games'))
  // .use('/users', require('./users'))


// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
