import Event from 'events'
import { constants } from './src/constants.js'
import Controller from './src/controller.js'
import SocketServer from './src/socket.js'

const eventEmitter = new Event()

const port = process.env.PORT || 9898
const socketServer = new SocketServer({ port })
const server = await socketServer.initialize(eventEmitter)

const controller = new Controller({ socketServer })
eventEmitter.on(constants.event.NEW_USER_CONNECTED, controller.onNewConnection.bind(controller))

console.log('socket server is running at', server.address().port)