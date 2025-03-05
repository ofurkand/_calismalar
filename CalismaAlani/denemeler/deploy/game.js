"use strict";
// export class Game {
//     constructor(target){
//         // console.log(target);

//         // window.TotalGames = document.getElementsByClassName(target);
//         // // Oyun İçin Oluşturulan Alan Adı
//         // this.oyun = `Game${TotalGames.length}`;
//         // console.log(this.oyun);

//         // window[oyun] = {};
//         // window[oyun].root = {};
//         // window[oyun].root.gameTarget = document.getElementById(target);
//         // console.log(window[oioaa], window.Game1); // Başarılı

//         this.oyun = this.addToList(target);
//         this.styleSheet(target);
//     }
//     styleSheet(target){
//         if (window.GamesStyleSheet === undefined || window.GamesStyleSheet === null) {
//             window.GamesStyleSheet = document.createElement('style');
//             window.GamesStyleSheet.textContent = "/*This style tag is essential for the games.*/\n";
//             document.head.appendChild(window.GamesStyleSheet); 
//         }
//         console.log(window.GamesStyleSheet);
//         window.GamesStyleSheet.textContent += `
//             .${target} {
//                 background-color: aqua;
//             }
//         `;
//     }
//     // addToList(target){
//     //     window.AllGames = document.getElementsByClassName(target);
//     //     return `Game${AllGames.length}`
//     // }
// }
window.notasyon = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
window.sira = false;
let kayitliBekleme;
class Game {
    constructor(htmlElement) {
        // Sınıfın property’si olarak sakla
        this.htmlElement = htmlElement;

        // Başlangıç içeriği
        console.log(this);
        // this.htmlElement.textContent = "Merhaba";

        // handleClick metodunun this'ini bağlayalım (removeEventListener için gerekli)
        this.handleClick = this.handleClick.bind(this);

        this.htmlElement.innerHTML = "";
        for (let index = 1; index <= 64; index++) {
            let eklenecekKare = document.createElement('div');
            eklenecekKare.classList.add('kare');
            index%8==1?sira:sira=!sira;sira?
            eklenecekKare.classList.add('beyaz'): eklenecekKare.classList.add('siyah');
            eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
            this.htmlElement.appendChild(eklenecekKare);
        }
        // Eventleri başlat
        this.initEvents();
    }

    initEvents() {
        // click event’ini tanımla
        this.htmlElement.addEventListener("click", this.handleClick);
    }

    handleClick() {
        // Tıklandığında çalışacak metod
        this.htmlElement.innerHTML = "clicked";
        clearInterval(kayitliBekleme);
        kayitliBekleme = setInterval(()=>{
            // this.htmlElement.innerHTML = "Merhaba";
            console.log("Ya");
            clearInterval(kayitliBekleme);
        },4000);
    }

    deconstructor() {
        // Event dinleyicisini kaldır
        this.htmlElement.removeEventListener("click", this.handleClick);
        // İçeriği temizle
        this.htmlElement.innerHTML = "";
    }
}

// Örnek kullanım:
// HTML tarafında <div id="icerik"></div> olduğunu düşünelim
const icerikAlani = document.getElementsByClassName("writeHereYourGameClassName")[0];
const ornek = new Game(icerikAlani);

// Daha sonra, ihtiyacınız kalmadığında deconstructor metodunu çağırabilirsiniz:
// ornek.deconstructor();