import { WebSocketServer } from "ws";
import EEW from "./connection/eew";
import Hello from "./connection/hello";
import { Kmoni } from "./kmoni";

export const kmoni = new Kmoni()

const wss = new WebSocketServer({port : 3000})

wss.on('listening', () => {
    console.log(` YDITS Re:Send API - version 1.0.0 Ready!`)
})

wss.on('connection', (ws) => {

   console.log(`[JOIN] - Hello!`)
   // 初期接続時の応答 
    Hello(ws)

    kmoni.on('oneew', () => {
        EEW(ws)
    })
})