export function hamleKayit(tas,hamle){
    hamleKayitYeri.textContent += `${tas === "piyon" ? "" : (sira?tas.toUpperCase():tas)}${hamle}, `
}