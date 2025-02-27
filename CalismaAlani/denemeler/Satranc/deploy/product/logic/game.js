"use strict";
export class Game {
    constructor(target){
        root.area=target;
        console.log(root.area);
        this.connectToTarget(target);
        // this.clearAll(target);
        // this.styleSheet(target);
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