"use strict";
export class Game {
    constructor(target){
        window.TotalGameCountForIdDistrubition = document.getElementsByClassName(target);
        // Oyun İçin Oluşturulan Alan Adı
        const oyun = `Game${}`;

        window[oyun] = {};
        window[oyun].root = {};
        window[oyun].root.gameTarget = document.getElementById(target);
        // console.log(window[oioaa], window.Game1); // Başarılı

    }

    styleSheet(target){
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            #${target} *{
                background-color: gray;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}