import axios from "axios"
import { EventEmitter } from "events"
import { KyoshinMonitorJSON , KmoniFormat, RawKmoni } from "./types"
import format from "./utils/format"

export class Kmoni extends EventEmitter {
    constructor() {
     
      console.log(`KYOSHIN=MONITOR MODULE - Version 1.0.0 betabe-ta`)
        super()
        this.check()
    }

    check () {
        let _id = ""
        let _eewId = ""
       setInterval(async () => {

        const date = `${new Date().getFullYear()}${format(new Date().getMonth() + 1)}${format(Number(new Date().getDate().toString().slice(-2)))}${format(new Date().getHours())}${format(new Date().getMinutes())}${format(new Date().getSeconds())}`
        
        const _debug = "20220316233600"
       
        const rawdata = (await axios.get(`http://www.kmoni.bosai.go.jp/webservice/hypo/eew/${date}.json`)).data
        const data = JSON.parse(JSON.stringify(rawdata)) as RawKmoni
        if(data?.result.message === "") {
          if(!_id || _id !== data.report_id) {
             this.emit("oneew", new KmoniFormat(data))
             _id = data.report_id
           }
        }

       },1000)
    }
}

export declare interface Kmoni {
    on(event : "oneew", listener:(data : KyoshinMonitorJSON) => void) : this
}