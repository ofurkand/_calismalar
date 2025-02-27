import { secimTemizle } from '../../lib/secimTemizle.js';
import { yerlestir } from '../../lib/yerlestir.js';

baslamaDugmesi.addEventListener("click", ()=>{
    oyunAktifligi = true;
    sira=true;
    hamleSirasi(true);
    function rokAyarlari(){
        _siyahKisaRok = true; _siyahUzunRok = true;
        _beyazUzunRok = true; _beyazKisaRok = true;
    }
    rokAyarlari();
});

sifirlamaDugmesi.addEventListener("click", ()=>{
    // Array.from(document.getElementsByClassName('kare')).forEach(div => {
    //     while (div.firstChild) {
    //         console.log(div);
    //         div.removeChild(div.firstChild);
    //     }
    // });
    oyunAktifligi = false;
    tahta.innerHTML="";
    
    oyunKonum = surum.baslangic_konumu;

    sira = true;
    siraGostergesi.textContent = "";
    for (let index = 1; index <= 64; index++) {
        let eklenecekKare = document.createElement('div')
        eklenecekKare.classList.add('kare');
        index%8==1?sira:sira=!sira;sira?
        eklenecekKare.classList.add('beyaz'): eklenecekKare.classList.add('siyah');
        eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
        tahta.appendChild(eklenecekKare);
    }
    secimTemizle();
    siraGostergesi.textContent = "";
    hamleKayitYeri.textContent = "";
    yerlestir(oyunKonum);
})


for (let index = 1; index <= 64; index++) {
    let eklenecekKare = document.createElement('div')
    eklenecekKare.classList.add('kare');
    index%8==1?sira:sira=!sira;sira?
    eklenecekKare.classList.add('beyaz'):
    eklenecekKare.classList.add('siyah');
    eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
    tahta.appendChild(eklenecekKare);
}

function kontrol(){
    
}