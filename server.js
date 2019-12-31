const express = require("express")
const http = require( 'http' )
const app = express()
const PORT = 3000
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ status: "success", message: "Hello World!" })
})

app.get('/quit', function(req,res) {
  res.send('Shutting down.')
  process.exit
});

// app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

function stop() {
  server.close()
}

const server = http.createServer(app)
server.listen( PORT )
module.exports = stop
module.exports = server

