import { Kmoni } from "."


export type KyoshinMonitorJSON = {
    IseewAttached : boolean
    request : KmoniRequests
    hypocenter : HypocenterInfo
    EEWinfos : Intensities
    reportid : string
    report_num : string
}

export type KmoniRequests = {
    report_time : string
    region_code ?: string
    request_time : string,
}

export type HypocenterInfo = {
    magunitude : string | number
    depth : string
    latitude : number | string
    longitude : number | string
}

export type Intensities = {
    calcintensity : string
    isAlert : boolean
}

export class KmoniFormat {
    public IseewAttached : boolean
    public request : KmoniRequests = {
        report_time : "",
        request_time : "",
        region_code : ""
    }
    public hypocenter : HypocenterInfo = {
        magunitude : "",
        depth : "",
        latitude : "",
        longitude : ""
    }
    public EEWinfos : Intensities = {
        isAlert : false,
        calcintensity : ""
    }
    public reportid : string
    public report_num : string

    constructor(data : RawKmoni) {
        this.IseewAttached = data.result ? true : false
        this.report_num = data.report_num
        this.reportid = data.report_id

       // this.request.region_code = data.region_code ? data.region_code : undefined
        this.request.report_time = data.report_time
        this.request.request_time = data.request_time

        this.hypocenter.depth = data.depth
        this.hypocenter.latitude = data.latitude
        this.hypocenter.longitude = data.longitude
        this.hypocenter.magunitude = data.magunitude

        this.EEWinfos.calcintensity = data.calcintensity
        this.EEWinfos.isAlert = Boolean(data.alertflg)
    }
}

export interface RawKmoni {
    result:            Result;
    report_time:       string;
    region_code:       string;
    request_time:      string;
    region_name:       string;
    longitude:         string;
    is_cancel:         boolean;
    depth:             string;
    calcintensity:     string;
    is_final:          boolean;
    is_training:       boolean;
    latitude:          string;
    origin_time:       string;
    security:          Security;
    magunitude:        string;
    report_num:        string;
    request_hypo_type: string;
    report_id:         string;
    alertflg:          string;
}

export interface Result {
    status:  string;
    message: string;
    is_auth: boolean;
}

export interface Security {
    realm: string;
    hash:  string;
}


