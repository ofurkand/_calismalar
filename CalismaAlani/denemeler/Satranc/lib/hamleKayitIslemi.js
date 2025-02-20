import { tasSecici } from "./tasSecici.js";

export function hamleKayit(tas,hamle){
    hamleKayitYeri.textContent += `${tas === "Piyon" ? "" : 
        /*(sira?tasSecici(tas).kisaltma.toUpperCase():tasSecici(tas).kisaltma)*/
        tasSecici(tas).kisaltma.toUpperCase()}${hamle.toLowerCase()} `
}