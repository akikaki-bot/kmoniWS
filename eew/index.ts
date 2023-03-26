import { WebSocket } from "ws";
import { client } from "../"

client.on('ready', () => {
    console.log('P2PWebsocket Service Ready!')
})

export default function EEWarningDetail (
    ws : WebSocket
) {
    client.on('eew', (data) => {
        if(data.test) return
          const Msg = {
              code : "WarningDetail",
              time : data.time,
              detail : data.earthquake,
              cancelled : data.cancelled,
              areas : data.areas,
              license : "p2pquake.net - JSONAPI v2"
          }
      
          ws.send(JSON.stringify(Msg))
      })
}






