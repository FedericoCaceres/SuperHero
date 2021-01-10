import express from 'express'
import dotenv from 'dotenv'
import Mongo from './services/mongo'
import router from '../src/routes/init.routes.js'

dotenv.config()
const port = process.env.PORT || 8000

const app = express()

app.use(express.json());

app.use(router)


Mongo.connect()
.then(() => {
    app.listen(port, function(){
        console.log(`Hi Fede. Im listening on the port ${port}!`)
    })
})
.catch(err => {
    console.log(err)
})

