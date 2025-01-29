const tahta = document.getElementById("satrancTahtasi");
const verilerURL = "_kaynakca/veriler.json";
let resimDosyaTurleri = ["img","object"];
const gecerliResimDosyaTuru = resimDosyaTurleri[0];
const siraGostergesi = document.getElementById("sira");
let sira = true; // (renk için geçici kullanımında)true: Beyaz
const notasyon = 
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let baslangicKonumu=["rnbqkbnr","pppppppp","8","8","8","8","PPPPPPPP","RNBQKBNR"].reverse();

function donusturFEN(girdi){
    return girdi.split('/').reverse();
}

for (let index = 1; index <= 64; index++) {
    let eklenecekKare = document.createElement('div')
    eklenecekKare.classList.add('kare');
    index%8==1?sira:sira=!sira;sira?
    eklenecekKare.style.backgroundColor="#a6a2a2":
    eklenecekKare.style.backgroundColor="gray";
    eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
    tahta.appendChild(eklenecekKare);
}

// let deneme = document.getElementById("C4");
// let eklenecek = document.createElement('img');
// eklenecek.src='_kaynakca/taslar/at.svg';
// deneme.appendChild(eklenecek);

// function tasYerlestir(baslangic,hedef){
//     baslangic = document.getElementById(baslangic);
//     hedef = document.getElementById(hedef);

//     hedef.appendChild(baslangic.getElementsByTagName("img")[0]);
// }

// function yerlestir(konum,tas){
//     if (Array.isArray(konum)){let i = 0;
//         konum.forEach(element => { i++; let j = 1;
//             // console.log(element);
//             element.split('').forEach(element2 => { 
//                 !isNaN(Number(element2)) ?
//                 j += element2: yerlestir(`${notasyon[i-1]}${j}`,element2); j++;
//                 console.log([`${notasyon[i-1]}${j-1}`,element2]);
//             });
//         });
//     }
function yerlestir(konum,tas){
    if (Array.isArray(konum)){let j = 0;
        konum.forEach(element => { let i = 0; j++; let artan = 0;
            // console.log(element);
            element.split('').forEach(element2 => { i++;
                !isNaN(Number(element2)) ?
                artan += Number(element2)-1 : yerlestir(`${notasyon[i-1+artan]}${j}`,element2);
                // console.log(artan+=element2) : yerlestir(`${notasyon[i-1+artan]}${j}`,element2);
                // console.log([`${notasyon[i-1]}${j-1}`,element2]);
            });
        });
    }
    // if (Array.isArray(konum)){ let j = 0;
    //     konum.forEach(element => { let i = 1;
    //         // console.log(element);
    //         element.split('').forEach(element2 => {console.log(!isNaN(Number(element2)))
    //             !isNaN(Number(element2))?
    //             j += element2: yerlestir(`${notasyon[i-1]}${i}`,element2); i++;
    //             console.log([`${notasyon[i-1]}${i}`,element2]);
    //         });
    //     });
    // }
    else{
        konum = document.getElementById(konum);
        let _tas = document.createElement(gecerliResimDosyaTuru);

        // (async () => {
        //       let response = await fetch(verilerURL);
        //       let data = await response.json();
        //       console.log(data);
        //     });
        // console.log(tas===tas.upperCase)

        // if (!(tas===tas.toUpperCase())) {
        //     _tas.style="filter: invert(100%);";
        //     _tas.class="tas beyaz";
        // }else{
        //     _tas.class="tas siyah";
        // }

        // tas===tas.toUpperCase()?null:_tas.style="filter: invert(100%);";
        tas===tas.toUpperCase()?_tas.style="filter: invert(100%);":null;
        async function x() {
            let response = await fetch(verilerURL);
            let data = await response.json();
            // console.log(tas);
            // console.log(data.taslar[tas.toLowerCase()]);
            // _tas.data  = "_kaynakca/"+data.taslar[tas.toLowerCase()].resimURL;
            _tas.src  = "_kaynakca/"+data.taslar[tas.toLowerCase()].resimURL;
            // _tas.style.fill = tas===tas.toUpperCase()?"gray":"#a6a2a2";
            konum.appendChild(_tas);
        }; x();
        
    }
}

yerlestir(baslangicKonumu);

let beyazlar = Array.from(document.querySelectorAll("img")).filter(svg => {
    let style = window.getComputedStyle(svg);
    return style.filter.includes('invert');
});
let siyahlar = Array.from(document.querySelectorAll("img")).filter(svg => {
    let style = window.getComputedStyle(svg);
    return !(style.filter.includes('invert'));
});

// let i = 0
// while(i < 3){

hamleSureci(sira?beyazlar:siyahlar);
function hamleSureci(takim){
    takim.forEach(img => {
        img.parentElement.style.cursor = "pointer";
        img.parentElement.addEventListener('mouseenter', (yer) => {
            img.style.transition= '0.3s';
            img.style.backgroundColor = 'yellow';
        });
        img.parentElement.addEventListener('mouseleave', () => {
            img.style.backgroundColor = '';
        });
        img.parentElement.addEventListener('click', (yer) => { 
            // Hamle Kısmı
            let secili = yer.target;
            kontrol(secili);
        })
    });
}

function tasAdi(konum){
    return konum.src.split('/').at(-1).split(".")[0]
}

function kontrol(secili){
    let secilen = tasAdi(secili);
    let konumArr = secili.parentElement.id.split('');
    let i = notasyon.indexOf(konumArr[0]);
    let cnt = 0;
        switch (secilen) {
            case "sah":
                // sağa
                if(!(konumArr[0] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // sola
                if(!(konumArr[0] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // yukarı
                if(!(Number(konumArr[1]) === 8)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // aşağı
                if(!(Number(konumArr[1]) === 1)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // sol aşağı
                if(!(Number(konumArr[1]) === 1)&&!(konumArr[0] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // sol üst
                if(!(Number(konumArr[1]) === 8)&&!(konumArr[0] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // sağ üst
                if(!(Number(konumArr[1]) === 8)&&!(konumArr[0] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                // sağ aşağı
                if(!(Number(konumArr[1]) === 1)&&!(konumArr[0] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                }
                
                break;
            case "vezir":
                // sağa
                while(!((konumArr[0] === "H") || (notasyon[i] === "H"))){
                    if (document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                        else{
                            break;
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i++;
                }
                i = notasyon.indexOf(konumArr[0]);
                // sola
                while(!(konumArr[0] === "A" || notasyon[i] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                    }
                    i--;
                }
                i = notasyon.indexOf(konumArr[0]);
                // yukarı
                while(!((cnt+Number(konumArr[1])) === 8)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                cnt = 0;
                i = notasyon.indexOf(konumArr[0]);
                // aşağı
                while(!(Number(konumArr[1]) === 1)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                    document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";                    i++;
                }
                i = notasyon.indexOf(konumArr[0]);
                // sol aşağı
                while(!((Number(konumArr[1])-cnt === 1)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                    cnt;
                    i++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sol üst
                while(!((Number(konumArr[1]) === 8)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                    }
                    i++;
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ üst
                while(!((Number(konumArr[1])+cnt === 8)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                    i++;
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ aşağı
                while(!((Number(konumArr[1]) === 1)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if ((document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                    i++;
                    cnt++;
                }
                
                break;
            case "fil":
                
                break;
            case "at":
                
                break;
            case "kale":
                
                break;
            case "piyon":
                
                break;
            
            default:
                break;
            
        }
}


//     i++;
// }

// siyahlar.forEach(element => {
//     element.parentElement.style.backgroundColor = "red";  // Parantez hatası giderildi
// });


// function hamleYap(hamle){
// }

// tasHareket("C4","H5");

