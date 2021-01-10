import { SuperHero } from '../../models/super-hero.model'
import { isValidObjectId } from 'mongoose'

export const superHero = async (data) => {
    const msj = []
    if(data.id) {
        if(!isValidObjectId(data.id)) {
            msj.push('ID is incorrect')
        } else {
            const hero = await SuperHero.findById({ _id: data.id })
            if(!hero) {
                msj.push('The Super Hero that you entered doesnt exist')
            }
        }
    }

    if(!data.heroId){
        msj.push('The hero ID is required')
    }
    if(!data.name){
        msj.push('The name is required')
    }

    data.series.forEach(function(serie){
        if(!serie.serieId){
            msj.push('The serie is required')
        }
        if(!serie.title){
            msj.push('The title of the serie is required')
        }
    })
    
    data.comics.forEach(function(comic){
        if(!comic.comicId){
            msj.push('The comic is required')
        } 
        if(!comic.title){
            msj.push('The comic title is required')
        } 
    })


    if (msj[0]){
        return msj
    }
    

    if(!data.id){
        const newSuperHero = new SuperHero({
            heroId: data.heroId,
            name: data.name,
            description: data.description,
            series: data.series,
            comics: data.comics
        })

        await newSuperHero.save()
        return ['The super hero was created']

    } else {
        await SuperHero.findByIdAndUpdate({ _id: data.id }, {
            heroId: data.heroId,
            name: data.name,
            description: data.description,
            series: data.series,
            comics: data.comics
        })
        return ['The super hero was updated']
    }


}