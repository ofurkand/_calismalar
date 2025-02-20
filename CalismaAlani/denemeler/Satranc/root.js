const siraGostergesi = document.getElementById("sira");
const baslamaDugmesi = document.getElementById("oyun");
const sifirlamaDugmesi = document.getElementById("sifirla");
const hamleKayitYeri = document.getElementById("pgn");
const tahta = document.getElementById("satrancTahtasi");
window.notasyon = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let _oyunAktifligi = false;
let _sira = true;
let _siyahKisaRok = true; let _siyahUzunRok = true;
let _beyazUzunRok = true; let _beyazKisaRok = true;   
let _Taslar = [];
let _Surumler = []; let _surum = "satranc";
// let _tahtaYonu = false;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

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
});

Object.defineProperty(window, 'Taslar',{
    get(){
        let donecekTaslar = new Map();
        _Taslar.forEach(tas => {
            // console.log(tas);
            if (surum.icerilenTaslarKisaltmalari.includes(tas.kisaltma)) {
                donecekTaslar.set(tas.kisaltma,tas);
            }
        });
        // console.log(donecekTaslar);
        return donecekTaslar;
    }
});

Object.defineProperty(window, 'Surumler',{
    get(){
        return _Surumler[0]
    },
    set(veri){
        _Surumler.push(veri);
    }
});

Object.defineProperty(window, 'surum',{
    get(){
        return _Surumler[0][_surum];
    },
    set(veri){
        _surum = veri;
    }
});

class Tas{
    constructor(veri){
        this.isim = veri.isim;
        this.resimURL = veri.resimURL;
        this.kisaltma = veri.kisaltma;
        this.deger = veri.deger;
        this.taslaraEkle();
    }
    taslaraEkle(){
        _Taslar.push(this);
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
