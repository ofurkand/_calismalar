export function tasAdi(girdi){
    return girdi.src.split('/').at(-1).split(".")[0].capitalize();
}

// export function tasKodu(ad){
//     Taslar.find(kod => Taslar === kod)
// }