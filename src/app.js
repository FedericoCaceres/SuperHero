import express from 'express'
import dotenv from 'dotenv'
import Mongo from './services/mongo'
import router from '../src/routes/init.routes.js'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

Mongo.connect()
.then(() => {
    app.listen(8000, function(){
        console.log('Hi Fede. Im listening on the port 8000!')
    })
})
.catch(err => {
    console.log(err)
})

