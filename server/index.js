const express = require('express')
const socket = require('ws').Server

const PORT = 8080

const server = express().listen(PORT, () => console.log(`starting at port: ${PORT}`))

const wss = new socket({ server })

wss.on('connection', ws => {
    console.log('client connected')

    ws.on('close', () => {
        console.log('close connected')
    })

    ws.on('message', data => {
        console.log(`message from client ${data}`)
        ws.send(`[Get message from server] ${data}`)
    })
})