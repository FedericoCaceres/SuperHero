import got from 'got'
import { marvel } from '../../services/auth/marvel'

export async function getAllCharacters(){
    const auth = marvel()
    try {
        const res = await got.get('https://gateway.marvel.com/v1/public/characters', { searchParams: 
        {
        ts: auth.ts,
        apikey: auth.publicKey,
        hash: auth.hash
    }}).json()
    return res

    } catch (error) {
        console.log('FALLO: ', error)
    }
}
