import { verilerURL } from "../script.js"

export function tasAdi(konum){
    return konum.src.split('/').at(-1).split(".")[0]
}

export function tasKodu(ad){
    Object.keys(verilerURL).find(kod => verilerURL === kod)
}