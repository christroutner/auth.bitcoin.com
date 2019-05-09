/*
  This is the example app from socket.io. This will be heavily modified soon.
  The reason for using this as a starting point is that both express and
  websockets are core architectural components for CashID and Badger Wallet
  single sign-on.
*/

var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http) // Websockets
const cors = require("cors") // Enable CORS
const bodyParser = require("body-parser") // Pass data in the body of a REST call.

const wlogger = require("./src/lib/winston-logging")

const user = require("./src/routes/v1/user")

// Enable middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const v1prefix = "v1"
app.use(`/${v1prefix}/user`, user.router)

app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", function(socket) {
  console.log("a user connected")

  socket.on("chat message", function(msg) {
    console.log(`message: ${msg}`)
    io.emit("chat message", msg)
  })

  socket.on("disconnect", function() {
    // Notified when user navigates away from the page.
    console.log("user disconnected")
  })
})

http.listen(3000, function() {
  console.log(`Server listening on http://localhost:3000`)

  const now = new Date()
  wlogger.info(`Server started at ${now.toLocaleString()}`)
})
