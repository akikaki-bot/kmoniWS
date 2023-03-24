import { MessageDefault } from "../type/hello.type";
import { WebSocket } from "ws";

/**
 * 
 * HI!!!!!!!!!!!!!!!!!!!
 * 
 * Hello from test.akika.ga
 */
export default function Hello (
    ws : WebSocket
) {
    const message : MessageDefault = {
        code : "Hello",
        message : "Hello!"
    }
    ws.send(
        JSON.stringify(
            message
        )
    )
}