export default function format (
    date : number
) {
    if(date < 10) return "0" + date
    else return date
}