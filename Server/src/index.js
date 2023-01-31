const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

require('dotenv').config()
const port = process.env.PORT

const cors = require('cors')
const bodyParser = require('body-parser')

const connect = require('./db/connect')
connect()

io.on('connection', (socket) => {
  socket.on('requestCart', (cartValues) => {
    io.emit('cartValues', cartValues)
  });
});
app.use(bodyParser.json())
app.use(cors())

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter')
const cartRouter = require('./routes/cartRouter')

app.use(registerRouter)
app.use(loginRouter)
app.use(itemRouter)
app.use(userRouter)
app.use(cartRouter)

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
