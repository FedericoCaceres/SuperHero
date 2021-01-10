import crypto from 'crypto'

export function marvel (){
const ts = Date.now()
const publicKey = '02af9dc26d5bf2a498409ed58cfbe371'
const privateKey = 'c8c04fe75033dfb8350428a7cf9ff7b022fedf14'


const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest("hex")

return { hash, ts, publicKey }

}