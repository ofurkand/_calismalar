import { tasAdi } from "./tasAdi.js";

export function kontrol(secili){
    let secilen = tasAdi(secili);
    let konumArr = secili.parentElement.id.split('');
    let i = notasyon.indexOf(konumArr[0]);
    let cnt = 0;
        switch (secilen) {
            case "sah":
                // sağa
                if(!(notasyon[i] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i++;
                }
                i = notasyon.indexOf(konumArr[0]);
                // sola
                if(!(notasyon[i] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i--;
                }
                i = notasyon.indexOf(konumArr[0]);
                // yukarı
                if(!((cnt+Number(konumArr[1])) === 8)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
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
                if(!(Number(konumArr[1]-cnt) === 1)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";                    
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt = 0;
                // sol aşağı
                if(!((Number(konumArr[1])-cnt === 1)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sol üst
                if(!((Number(konumArr[1])+cnt === 8)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ üst
                if(!((Number(konumArr[1])+cnt === 8)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ aşağı
                if(!((Number(konumArr[1])-cnt === 1)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                break;
            case "vezir":
                // sağa
                while(!(notasyon[i] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i++;
                }
                i = notasyon.indexOf(konumArr[0]);
                // sola
                while(!(notasyon[i] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i--;
                }
                i = notasyon.indexOf(konumArr[0]);
                // yukarı
                while(!((cnt+Number(konumArr[1])) === 8)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                            
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                cnt = 0;
                i = notasyon.indexOf(konumArr[0]);
                // aşağı
                while(!(Number(konumArr[1]-cnt) === 1)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";                    
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt = 0;
                // sol aşağı
                while(!((Number(konumArr[1])-cnt === 1)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sol üst
                while(!((Number(konumArr[1])+cnt === 8)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ üst
                while(!((Number(konumArr[1])+cnt === 8)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ aşağı
                while(!((Number(konumArr[1])-cnt === 1)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                break;
            case "fil":
                // sol aşağı
                while(!((Number(konumArr[1])-cnt === 1)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sol üst
                while(!((Number(konumArr[1])+cnt === 8)||(notasyon[i-cnt] === "A"))){
                    if (document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i-1-cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ üst
                while(!((Number(konumArr[1])+cnt === 8)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                i = notasyon.indexOf(konumArr[0]);
                cnt=0;
                // sağ aşağı
                while(!((Number(konumArr[1])-cnt === 1)||(notasyon[i+cnt] === "H"))){
                    if (document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i+1+cnt]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                break;
            case "at":
                // üst sol
                if((Number(konumArr[1]) < 7)&&!(konumArr[0] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+2}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+2}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+2}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])+2}`).style.backgroundColor="darkblue";
                    }
                }
                // üst sağ
                if((Number(konumArr[1]) < 7)&&!(konumArr[0] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+2}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+2}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+2}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])+2}`).style.backgroundColor="darkblue";
                    }
                }
                // alt sol
                if((Number(konumArr[1]) > 2)&&!(konumArr[0] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-2}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-2}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-2}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-1]}${Number(konumArr[1])-2}`).style.backgroundColor="darkblue";
                    }
                }
                // alt sağ
                if((Number(konumArr[1]) > 2)&&!(konumArr[0] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-2}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-2}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-2}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+1]}${Number(konumArr[1])-2}`).style.backgroundColor="darkblue";
                    }
                }
                // sağ üst
                if((Number(konumArr[1]) < 8)&&!((konumArr[0] === "H")||(konumArr[0] === "G"))){
                    if (document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                    }
                }
                // sağ alt
                if((Number(konumArr[1]) > 1)&&!((konumArr[0] === "H")||(konumArr[0] === "G"))){
                    if (document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i+2]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                    }
                }
                // sol üst
                if((Number(konumArr[1]) < 8)&&!((konumArr[0] === "A")||(konumArr[0] === "B"))){
                    if (document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])+1}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                    }
                }
                // sol alt
                if((Number(konumArr[1]) > 1)&&!((konumArr[0] === "A")||(konumArr[0] === "B"))){
                    if (document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])-1}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])-1}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                        }
                    }
                    else{
                        document.getElementById(`${notasyon[i-2]}${Number(konumArr[1])-1}`).style.backgroundColor="darkblue";
                    }
                }
                break;
            case "kale":
                // sağa
                while(!(notasyon[i] === "H")){
                    if (document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i+1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i++;
                }
                i = notasyon.indexOf(konumArr[0]);
                // sola
                while(!(notasyon[i] === "A")){
                    if (document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i-1]}${konumArr[1]}`).style.backgroundColor="darkblue";
                    }
                    i--;
                }
                i = notasyon.indexOf(konumArr[0]);
                // yukarı
                while(!((cnt+Number(konumArr[1])) === 8)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                            
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i]}${Number(konumArr[1])+1+cnt}`).style.backgroundColor="darkblue";
                    }
                    cnt++;
                }
                cnt = 0;
                i = notasyon.indexOf(konumArr[0]);
                // aşağı
                while(!(Number(konumArr[1]-cnt) === 1)){
                    if (document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).hasChildNodes()) {
                        if (!(document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";
                        }
                        break;
                    }
                    else{
                        document.getElementById(`${notasyon[i]}${Number(konumArr[1])-1-cnt}`).style.backgroundColor="darkblue";                    
                    }
                    cnt++;
                }
                break;
            case "piyon":
                // normal hareket
                if (!(document.getElementById(`${notasyon[i]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).hasChildNodes())) {
                    document.getElementById(`${notasyon[i]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).style.backgroundColor="darkblue";
                    // başlangıç yararı
                    if (!(document.getElementById(`${notasyon[i]}${(sira?Number(konumArr[1])+2:Number(konumArr[1])-2)}`).hasChildNodes())&&(sira?Number(konumArr[1])===2:Number(konumArr[1])===7)) {
                        document.getElementById(`${notasyon[i]}${(sira?Number(konumArr[1])+2:Number(konumArr[1])-2)}`).style.backgroundColor="darkblue";
                    }
                }
                // çapraz kontrol
                    // sağ
                    if (!(konumArr[0]==="H")) {
                        if ((document.getElementById(`${notasyon[i+1]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).hasChildNodes())&&
                        !(document.getElementById(`${notasyon[i+1]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).firstChild.style.filter.includes('invert')===sira)) {
                            document.getElementById(`${notasyon[i+1]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).style.backgroundColor="darkblue";
                        }
                    }
                    // sol
                    if (!(konumArr[0]==="A")) {
                        if ((document.getElementById(`${notasyon[i-1]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).hasChildNodes())&&
                        !(document.getElementById(`${notasyon[i-1]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).firstChild.style.filter.includes('invert')===sira)) {
                        document.getElementById(`${notasyon[i-1]}${(sira?Number(konumArr[1])+1:Number(konumArr[1])-1)}`).style.backgroundColor="darkblue";
                        }
                    }
                // if ((document.getElementById(`${(sira?notasyon[i+1]:notasyon[i-1])}${Number(konumArr[1])+1}`).hasChildNodes())&&
                // !(document.getElementById(`${(sira?notasyon[i+1]:notasyon[i-1])}${Number(konumArr[1])+1}`).firstChild.style.filter.includes('invert')===sira)) {
                //     document.getElementById(`${(sira?notasyon[i+1]:notasyon[i-1])}${Number(konumArr[1])+1}`).style.backgroundColor="darkblue";
                // }

                // en-passant şu anlık devre-dışı
                break;
            default:
                break;
        }
}