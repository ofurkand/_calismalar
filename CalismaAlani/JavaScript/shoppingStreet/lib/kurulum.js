import { binalar,sokak } from "../script.js";

Binalar = [15,5];Sokak = [30,5];

export const main = function(){
    for (let i = 0; i < Sokak.reduce((a, b) => a * b); i++) {
        let x = document.createElement("div");
        x.id = `SOKAK${i}`;
        sokak.appendChild(x);
    }
    for (let i = 0; i < Binalar.reduce((a, b) => a * b); i++) {
        let x = document.createElement("div");
        x.id = "BINA"+i.toString();
        binalar.appendChild(x);
    }
    return true
}
