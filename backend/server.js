//Import packages
//const websocket = require("websocket").server
const http = require("http")
const {WebSocket, WebSocketServer} = require("ws")
const server = http.createServer()

const websocketServer = new WebSocketServer({
    server
})


// websocketServer.on('request', (request)=>{
//     const connection = request.accept(null, request.origin)
//     connection.on("message", (message)=>{
//         console.log("message")
//     })
//     connection.on("close", (reasonCode, description)=>{
//         console.log("Close")
//     })
//     connection.on("connection", (con)=>{
//         console.log("received a new connection")
//     })
// })

server.listen(3001, ()=>{
    console.log("websocket server is listening on port: 3001")
})     


websocketServer.on()
