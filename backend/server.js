//Import packages
//const websocket = require("websocket").server
// const http = require("http")
// const {WebSocket, WebSocketServer} = require("ws")
// const server = http.createServer()
const express = require('express')

const webserver = express()
 .use((req, res) =>
   res.sendFile('/ws-client.html', { root: __dirname })
 )
 .listen(3000, () => console.log(`Listening on ${3000}`))

const { WebSocketServer } = require('ws')
const sockserver = new WebSocketServer({ port: 2048 })

sockserver.on('connection', ws => {
    console.log('New client connected!')
    
    ws.send('connection established')
    
    ws.on('close', () => console.log('Client has disconnected!'))
    
    ws.on('message', data => {
        sockserver.clients.forEach(client => {
        console.log(`distributing message: ${data}`)
        client.send(`${data}`)
        })
    })
    
    ws.onerror = function () {
        console.log('websocket error')
    }
}
)























// const websocketServer = new WebSocketServer({
//     server
// })


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

// server.listen(3001, ()=>{
//     console.log("websocket server is listening on port: 3001")
// })     


// websocketServer.on()
