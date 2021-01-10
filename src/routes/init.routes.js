import { Router } from 'express'
import { MarvelAPI } from '../controllers/marvel/collector.js'
import { superHero } from '../controllers/super-hero/super-hero.js'
import { getAllHeros } from '../controllers/super-hero/get-all-heros.js'

const router = Router()

router.get('/', (req, res) => {
    res.send({ message: 'Hello ! This is my hero API' })
})

router.get('/marvel', async (req, res) => {
    res.json(await MarvelAPI.getAllCharacters())
})

router.get('/marvel/:id', async (req, res) => {
    res.json(await MarvelAPI.getCharacter(req.params.id))
})

router.post('/hero', async (req, res) => {
    res.json(await superHero(req.body))
})

router.get('/heros', async (req, res) => {
    res.json(await getAllHeros())
})

router.use((req, res) => {
    res.status(404).send('Not found. Sorry :(')
})

router.use((req, res) => {
    res.status(500).send('Oops! There was an error. Sorry :(')
})

export default router