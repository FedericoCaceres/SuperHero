import Joi from 'joi'

const serie = Joi.object({
  serieId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null).required(),
  startYear: Joi.number().required(),
  endYear: Joi.number().required(),
  rating: Joi.string().allow(null)
})

const comic = Joi.object({
  comicId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow(null).required()
})

const SuperHeroValidation = Joi.object({
  id: Joi.string(),
  heroId: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().allow(null).required(),
  series: Joi.array().items(serie).required(),
  comics: Joi.array().items(comic).required()
})

export const validator = async data => {
  const result = SuperHeroValidation.validate(data, {
    allowUnknown: true
  })
  if (result.error) {
    return {
      success: false,
      message: result.error.details
    }
  } else {
    return {
      success: true,
      message: 'Verified correctly'
    }
  }
}
