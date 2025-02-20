import { tasSecici } from "./tasSecici.js";

let resimDosyaTurleri = ["img","object"];
let gecerliResimDosyaTuru = resimDosyaTurleri[0];

export function yerlestir(konum,tas){ 
    // *******Çok fazla kez kendini tekrar ediyor. Geçici bir önlem olarak _tekSefer fonksiyonu oluşturuldu.*******
    if (Array.isArray(konum)){let j = 0;
        konum.forEach(element => { let i = 0; j++;
            element.split('').forEach(element2 => { i++;
                !isNaN(Number(element2)) ?
                i += Number(element2)-1 : yerlestir(`${notasyon[i-1]}${j}`,element2);
            });
        });
    }

    else{
        konum = document.getElementById(konum);
        let _tas = document.createElement(gecerliResimDosyaTuru);
        tas===tas.toUpperCase()?_tas.style="filter: invert(100%);":null;
        // fetch(verilerURL)
        // .then(response => response.json())
        // .then(data => { _tekSefer(data); });
            // console.log(data);
            // let _taslar1 = data.taslar;            
            // // console.log(_taslar1);
            // _taslar2 = _taslar1.map(tas => new Tas(tas));
        let _seciliTas = tasSecici(tas.toLowerCase());
        _tas.src = "../Satranc/_kaynakca/" + _seciliTas.resimURL;
        _tas.alt = (tas===tas.toUpperCase()?_seciliTas.isim.toUpperCase():_seciliTas.isim.toLowerCase());
        konum.appendChild(_tas);  
        // });
    }
}
// let _taslar2 = []

// let calistiMi = false;

// function _tekSefer(veri) {
//     if (!calistiMi) {
//         // console.log(veri);
//         _taslar2 = veri.taslar.map(tas => new Tas(tas));
//         calistiMi = true;
//     }
// }