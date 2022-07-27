import moment from 'moment'

var dateTime = moment().format('DD-MM-YYYY==HH:mm:ss')

export function getTime(req, res, next){
    req.getTime = dateTime
    next()
}

export function logger(req, res, next){
    console.log(`Время запроса: ${req.getTime}`)
    next()
}