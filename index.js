/*
  This is the example app from socket.io. This will be heavily modified soon.
  The reason for using this as a starting point is that both express and
  websockets are core architectural components for CashID and Badger Wallet
  single sign-on.
*/

var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

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
})
