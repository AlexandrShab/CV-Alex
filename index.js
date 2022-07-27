import express from 'express'
import path from 'path'
import {getTime, logger}from './middleware.js'
import serverRoutes from './routes/routers.js'
import moment from 'moment'

var date = moment().format('DDMMYYYY')
var dateTime = moment().format('DDMMYYYY-HHmmss_SSS')

const __dirname =path.resolve()
const PORT = process.env.PORT ?? 3000

const app = express()

app.set('view engine', 'ejs')
console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(getTime)    
app.use(logger)

app.use(serverRoutes)


//~~~~~~~~~run listener~~~~~~~~~~~~~~~~~~~~

app.listen(PORT, ()=>{
    console.log('Server is UP on PORT: '+PORT)
})