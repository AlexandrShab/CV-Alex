import {Router} from 'express'
//import {getAll, create, remove, getNames} from '../controllers/servers.js'
const router = Router()

router.get('/', (req,res)=>{
    res.render('index', {title:"Resume", active:"main"})
})

router.get('/view-foto', (req, res)=>{
    console.log(req.query)
    res.render('view-foto', {title:"Просмотр "+ req.query.name, active:"view-foto", file: req.query.name})
})
export default router