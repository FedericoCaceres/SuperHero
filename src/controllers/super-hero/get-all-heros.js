import { SuperHero } from '../../models/super-hero.model'

export const getAllHeros = async () => {
    return await SuperHero.find()
}