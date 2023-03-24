import { WebSocket } from "ws";
import { kmoni } from "../"

export default function EEW (
    ws : WebSocket
) {
    kmoni.on('oneew', (data) => {
        ws.send(JSON.stringify(data))
    })
}