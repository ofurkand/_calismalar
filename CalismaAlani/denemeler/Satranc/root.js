const siraGostergesi = document.getElementById("sira");
const baslamaDugmesi = document.getElementById("oyun");
const sifirlamaDugmesi = document.getElementById("sifirla");
const hamleKayitYeri = document.getElementById("pgn")

let _oyunAktifligi = false;
let _sira = true;
let _siyahKisaRok = true;
let _siyahUzunRok = true;
let _beyazUzunRok = true;
let _beyazKisaRok = true;   
let _taslar = [];
// let _tahtaYonu = false;

Object.defineProperty(window, 'sira', {
    get() {
        baslamaDugmesi.disabled = oyunAktifligi;
        return _sira;
    },
    set(value) {
        _sira = value;
        if (oyunAktifligi) {
            siraGostergesi.textContent = `Sıra ${_sira?'beyazda':'siyahta'}!`;
        }
    }
});

Object.defineProperty(window, 'oyunAktifligi', {
    get() {
        return _oyunAktifligi;
    },
    set(value) {
        _oyunAktifligi = value;
    }
})

Object.defineProperty(window, 'taslar',{
    get(){
        return _taslar;
    }
})

class Tas{
    constructor(veri){
        this.isim = veri.isim;
        this.resimURL = veri.resimURL;
        this.kisaltma = veri.kisaltma;
        this.deger = veri.deger;
        this.taslaraEkle();
    }
    taslaraEkle(){
        _taslar.push(this);
    }
}

// Object.defineProperty(window, 'tahtaYonu', {
//     get() {
//         return _tahtaYonu;
//     },
//     set(value) {
//         _tahtaYonu = value;
//         // Tahtayı döndürme işlemleri burada yapılabilir
//         if (_tahtaYonu) {
//             // Normal yön
//             tahta.style.transform = "rotate(0deg)";
//         } else {
//             // Ters yön
//             tahta.style.transform = "rotate(180deg)";
//         }
//     }
// });

window.notasyon = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];