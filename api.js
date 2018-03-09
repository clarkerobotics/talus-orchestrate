/**
 * Talus Orchestrate API
 */
const express   = require('express')
, app           = express()
, bodyParser    = require('body-parser')
, cors          = require('cors')
, config        = require('./config/config.json')
, socketIO      = require('socket.io')
, Session       = require('./modules/session')
, Scenes        = require('./modules/scenes')

// base server setup
const port = process.env.PORT || config.server.port
const baseRoute = `/api/${config.server.version}`
let ws = null

// setup the middlewares
app.disable('x-powered-by')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
 methods: ['GET', 'PUT', 'POST'],
}))

// router handlers, uses Session middleware
app.use(`${baseRoute}/scenes`, Session, Scenes)

// Route for data transfer direct to client side
app.post(`${baseRoute}/event/:type/:id`, (req, res) => {
  if (!ws) return
  ws.emit('WS:UPDATE', {
    type: req.params.type || '',
    id: req.params.id || '',
    payload: req.body
  })
  res.status(200).send()
})

// catchall
app.use('*', function(req, res) {
  res.status(404).send('Nothing here!')
})

// START THE SERVER
// =============================================================================
const server = app.listen(port)
console.log(`Server Started\nhttp://localhost:${port}`)


// START THE SOCKETS
// =============================================================================
ws = socketIO.listen(server)

ws.on('connection', (client) => {
  console.log('Connected!', client.id)

  // Listen for actionable events coming through
  client.on('WS:CLIENT', (data) => {
    if (!data) return
    console.log('WS:CLIENT::', data)
  })
})
ws.on('disconnect', () => {
  console.log('Disconnect!')
})
