import mongoose from 'mongoose'

const Schema = mongoose.Schema

const superHeroSchema = new Schema({
    heroId: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    series: [{
        serieId: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        startYear: {
            type: Number
        },
        endYear: {
            type: Number
        },
        rating: { 
            type: String
        }
    }],
    comics: [{
        comicId: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    }]
})

export const SuperHero = mongoose.model('superHero', superHeroSchema, 'superHeros')