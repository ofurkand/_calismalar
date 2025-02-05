import { main } from "./lib/kurulum.js";
import { sira } from "./lib/idBulucu.js";

export const binalar = document.getElementsByClassName("binalar")[0];
export const sokak = document.getElementById("sokak");
export const paraGostergesi = document.getElementById("paraGostergesi");

document.addEventListener("DOMContentLoaded", function() {
    // Your async function to increase the number
    async function paraArtisi() {
        // if (boolean) {
        const interval = setInterval(() => {
            paraGostergesi.textContent = (Number(paraGostergesi.textContent) + 1).toString();
        }, 2000);
            //     // Stop the interval after 10 seconds
        //     setTimeout(() => {
        //         clearInterval(interval);
        //     }, 10000); // Stop after 10 seconds
        // }
    }
    paraArtisi();
    main();
    // Start the function
});

// let baslangic = sokak.getElementsById(`${sira(1,3,sokak)}`);