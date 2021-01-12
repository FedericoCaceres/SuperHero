import { SuperHero } from '../../models/super-hero.model'
import { isValidObjectId } from 'mongoose'
import { validator } from '../../services/validations/super-hero'

export class Hero {
  static async write(req, res) {
    const data = req.body

    if (data.id) {
      if (!isValidObjectId(data.id)) {
        res.send('ID is incorrect')
      } else {
        const hero = await SuperHero.findById({ _id: data.id })
        if (!hero) {
          res.send('The Super Hero that you entered doesnt exist')
        }
      }
    }

    const result = await validator(data)
    if (!result.success) {
      return res.send(result)
    }
    if (!data.id) {
      const newSuperHero = new SuperHero({
        heroId: data.heroId,
        name: data.name,
        description: data.description,
        series: data.series,
        comics: data.comics
      })
      await newSuperHero.save()
      res.send('The super hero was created')
    } else {
      try {
        await SuperHero.findByIdAndUpdate(
          { _id: data.id },
          {
            heroId: data.heroId,
            name: data.name,
            description: data.description,
            series: data.series,
            comics: data.comics
          }
        )
        res.send('The super hero was updated')
      } catch (error) {
        res.send('An error ocurred.', error)
      }
    }
  }

  static async read(req, res) {
    res.send(await SuperHero.find())
  }
}
