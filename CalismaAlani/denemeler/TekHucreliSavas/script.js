let oyunEtkinligi = false;
const baslaBtn = document.getElementById('baslaBtn');
const oyunAlani = document.getElementById('oyun');

/* 1: Kurulum */
oyunAlani.style.alignItems = "center";
oyunAlani.style.justifyContent = "center";
oyunAlani.style.backgroundColor = 
window.getComputedStyle(oyunAlani).borderColor;
/* 1 */

baslaBtn.addEventListener('click', function(){
    if (!oyunEtkinligi) {
        oyunBasla();
        baslaBtn.innerText="Yeniden "+baslaBtn.innerText;
    }
    else{
        null;
    }
})

function oyunBasla(){
    oyunEtkinligi = true;
    oyunAlani.style.justifyContent = "default";
    baslaBtn.style.display = "none";
}