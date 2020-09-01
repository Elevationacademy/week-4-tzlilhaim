const http = require("http")
const express = require("express")
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))

const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
}

const port = 3000
app.listen(port, function () {
  console.log(`Node server created at port ${port}`)
})

app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.")
  response.send("Ending the cycle, thanks for visiting!")
})

app.get("/life", function (request, response) {
  response.send("42")
})

app.get("/users/:userID", function (request, response) {
  const userID = request.params.userID
  response.send(users[userID])
})

app.get("/details", function (request, response) {
  let params = request.query
  console.log(params.city)

  response.send(params)
})
// http://localhost:3000/details?zipcode=6863155&city=Ankh%20Morpork&middleName=Wilfred
