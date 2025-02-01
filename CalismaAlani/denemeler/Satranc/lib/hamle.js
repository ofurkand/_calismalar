import { secimTemizle } from "./secimTemizle.js";
import { takimSecici } from "./takimSecici.js";
import { eventAdded_hamleSureci, turuncuRGB} from "../script.js";
import { fareAyrildi, fareUstunde } from "./fare.js";
import { kontrol } from "./kontrol.js";

export let hamleSecildi;hamleSecildi = false;

export function hamleSirasi(x = null){
    secimTemizle();
    eventAdded_hamleSureci.forEach(element => {
        element.removeEventListener('mouseenter', fareUstunde);
        element.removeEventListener('mouseleave', fareAyrildi);
        element.removeEventListener('click', hamleYapim);
        eventAdded_hamleSureci.delete(element);
    });
    x === null ? sira = !sira:sira;
    takimSecici().forEach(element => element.parentElement.style.transition = '0.3s');
    hamleSureci(takimSecici());
    hamleSecildi = false;
}

export function hamleYapim() {
    if (hamleSecildi){
        if(getComputedStyle(this).backgroundColor === 'rgb(0, 0, 139)'){
            let secili = (Array.from(document.getElementsByClassName('kare')).filter(element => {
                return getComputedStyle(element).backgroundColor === turuncuRGB;
            }))[0];
            this.hasChildNodes()?
            this.replaceChild(secili.firstChild,this.firstChild):
            this.appendChild(secili.firstChild);
            hamleSecildi = false;
            this.style.boxShadow = "";
            hamleSirasi();
        }
    }
    else{
        if (this.parentElement.hasChildNodes()) {
            kontrol(this);
            if(Array.from(document.getElementsByClassName('kare'))
                .filter(div => div.style.backgroundColor === "darkblue").length>0){
                this.parentElement.style.backgroundColor = turuncuRGB;
                hamleSecildi = true;
            }
        }
    }
}

function hamleSureci(takim){
    takim.forEach(img => {
        img.addEventListener('mouseenter',fareUstunde);
        img.addEventListener('mouseleave',fareAyrildi);
        img.addEventListener('click',hamleYapim);
        eventAdded_hamleSureci.add(img);
    });
};