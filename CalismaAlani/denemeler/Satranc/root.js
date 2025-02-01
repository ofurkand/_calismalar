const siraGostergesi = document.getElementById("sira");

let _oyunAktifligi = false;
let _sira = true;

Object.defineProperty(window, 'sira', {
    get() {
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

window.notasyon = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];