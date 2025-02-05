export const binalar = document.getElementsByClassName("binalar")[0];
export const sokak = document.getElementsByClassName("sokak")[0];
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

    // Start the function
    paraArtisi();
});