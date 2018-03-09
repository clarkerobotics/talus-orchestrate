const express = require('express')

module.exports = (function() {
  const api = express.Router()

  // Beginning of the world!
  api

  // Get all
  .get('/', function(req, res) {
    res.status(200).json({
      hey: 'This will contain some array of stuff',
      results: [],
      total: 0
    })
  })

  // Get single
  .get('/:id', function(req, res) {
    res.status(200).json({
      hey: 'This will contain a single stuff'
    })
  })

  return api
})()
