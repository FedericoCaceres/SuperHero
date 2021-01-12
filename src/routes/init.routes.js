import { Router } from 'express'
import { MarvelAPI } from '../services/marvel/collector'
import { Hero } from '../controllers/super-hero/super-hero'

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

router.post('/hero', Hero.write)

router.get('/heroes', Hero.read)

router.use((req, res) => {
  res.status(404).send('Not found. Sorry :(')
})

router.use((req, res) => {
  res.status(500).send('Oops! There was an error. Sorry :(')
})

export default router
