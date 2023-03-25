import { WebSocketServer } from "ws";
import EEW from "./connection/eew";
import Hello from "./connection/hello";
import { Kmoni } from "./kmoni";
import * as http from "http"

const app = http.createServer(
    (req,res) => {                 
            res.writeHead(200, "OK");
            res.write('OKdayo!');
            res.end()
        }
    )
app.listen(3000)

export const kmoni = new Kmoni()

const wss = new WebSocketServer(
    {
    server : app,
    path : "/kmoni"
   }
)

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