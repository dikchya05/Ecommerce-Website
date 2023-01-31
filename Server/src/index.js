const app = require('express')()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
const connect = require('./db/connect')
connect()

io.on('connection', (socket) => {
  socket.on('requestCart', (Cartsvalues) => {
    // console.log("i am anil", cartValues)
    //send to other connected clients
    io.emit('Cartsvalues', Cartsvalues)
  });
});


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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
