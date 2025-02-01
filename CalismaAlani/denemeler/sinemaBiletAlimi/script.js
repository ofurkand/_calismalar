const verilerUrl = 'veriler.json';

// var veriler;

// function fetchData(url) {
//     return fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         return data;
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }

// veriler = fetchData(verilerUrl).then(data => {
//     veriler = data;
//     console.log(veriler);
//     // return data;
// });
// function veriOku(url){
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data) => {return data})
// }
// let veriler = veriOku(verilerUrl)

// (ChatGPT)
// let globalData;
// async function fetchData() {
//   const response = await fetch(verilerUrl);
//   globalData = await response.json();
//   console.log("Veri fetchData içinde:", globalData); // Veri burada tanımlanmış olur.
// }
// (async function main() {
//   await fetchData();
//   console.log("Global veri:", globalData); // Burada da artık veriye erişilebilir.
// })();

// (ChatGPT)
// let globalData;
// async function fetchData() {
//   const response = await fetch(verilerUrl);
//   globalData = await response.json();
// }
// async function useGlobalData() {
//   if (!globalData) {
//     await fetchData();
//   }
//   console.log("Kullanılabilir veri:", globalData);
// }
// // Veriyi çağırmak için:
// useGlobalData();

// (ChatGPT)
// let globalData;
// function fetchData(callback) {
//   fetch(verilerUrl)
//     .then(response => response.json())
//     .then(data => {
//       globalData = data;
//       callback(globalData); // Veriyi callback ile ilet.
//     });
// }
// fetchData((data) => {
//   console.log("Callback ile veri:", data);
//   console.log("Global veri:", globalData);
// });

const alan = document.getElementById('alan');
alan.addEventListener('click', (secilen)=>{
    if(secilen.target.classList.contains('koltuk') && !secilen.target.classList.contains('dolu')){
        // !secilen.target.classList.contains('secili')?secilen.target.classList.add('secili'):secilen.target.classList.remove('secili');
        secilen.target.classList.toggle('secili'); // => toggle <=
    }
    if (alan.querySelectorAll('.koltuk.secili').length === 0) {
        mesaj.textContent = varsMesaj;
    }
    else{
        // eklenecekOge = document.createElement('span');
        // eklenecekOge.textContent = alan.querySelectorAll('.koltuk.secili').length;
        // eklenecekOge.id = "miktar";
        // eklenecekOgeler.push(eklenecekOge);
        // eklenecekOgeler.push(" adet koltuk için hesaplanan ücret ");
        // eklenecekOge = document.createElement('span');
        // eklenecekOge.textContent = alan.querySelectorAll('.koltuk.secili').length*25;
        // eklenecekOge.id = "ucret";
        // eklenecekOgeler.push(eklenecekOge);
        // eklenecekOgeler.push(" ₺.");
        // mesaj.innerHTML=eklenecekOgeler;

        mesaj.innerHTML = ""; // İçerik sıfırlama işlemi
        eklenecekOge = document.createElement("span");
        eklenecekOge.textContent = alan.querySelectorAll('.koltuk.secili').length;
        eklenecekOge.id = "miktar";
        mesaj.appendChild(eklenecekOge);
        mesaj.appendChild(document.createTextNode(" adet koltuk için hesaplanan ücret "));
        // İkinci span: Ücret miktarı
        eklenecekOge = document.createElement("span");
        eklenecekOge.id = "ucret";
        eklenecekOge.textContent = alan.querySelectorAll('.koltuk.secili').length*25;
        mesaj.appendChild(eklenecekOge);
        mesaj.appendChild(document.createTextNode("₺."));
    }
});
let eklenecekOge;
let eklenecekOgeler = [];
const main = document.querySelector('main');
const sinemalar = document.getElementById('filmler');
const secimMiktar = document.getElementById('miktar');
const secimUcret = document.getElementById('ucret');
const mesaj = document.getElementById('mesaj');
const varsMesaj = "Lütfen koltuk seçiminizi yapınız.";
const salonlar = document.getElementById('salonlar');
const yaz = (veri)=>console.log(veri);
// main.style.backgroundColor = "green";

async function veriislem (islem="kurulum",veri=0) 
{
    // islem 1: Sinema salonu oluşturur
    // veri: islem'nun ihtiyacı olan anahtar değerdir
    let response = await fetch(verilerUrl);
    let dataobj = await response.json();
    // console.log(dataobj);
    
    // Salon Oluşturma Aşaması
    switch (islem)
    { 
        case "kurulum":
            // Tüm koltuklar (varsa) temizleniyor
            // if (alan.hasChildNodes) // İşe yaramıyor
                // {
                while (alan.firstChild) // Yöntem 1
                    {alan.removeChild(alan.lastChild);}
                // }
            // alan.parentNode.removeChild(alan); // Yöntem 2
            // main.removeChild(alan); // Yöntem 3 / childObject'ler silinmiyormuş

            let salonIsmi = Object.keys(dataobj.salonlar)[veri];
            // Koltuklar yerleştiriliyor
            let eklenecekSira;
            let _sinemalar = dataobj.sinemalar;
            let _salonlar = dataobj.salonlar;
            let _koltukTaslak = dataobj.salonlar[salonIsmi].genelBakis;
            let _koridorTaslak = dataobj.salonlar[salonIsmi].yolAyrimNoktalari;
            // main.appendChild(alan);
            for (let _x = 1; _x < _koltukTaslak.y+1; _x++) {
                eklenecekSira = document.createElement("div");
                eklenecekSira.classList.add("sira");
                for (let _y = 1; _y < _koltukTaslak.x+1; _y++) {
                    eklenecekOge = document.createElement("div");
                    eklenecekOge.classList.add("koltuk");
                    // Koltuk hâli hazırda doluysa burada belirtilecek.. 
                    eklenecekSira.appendChild(eklenecekOge);
                    // Koridor boşluğu burada var mı?
                    _koridorTaslak.y.forEach(element => {
                        if (_y<element && element<_y+1){
                            eklenecekOge = document.createElement("div");
                            eklenecekOge.classList.add("koridor");
                            eklenecekSira.appendChild(eklenecekOge);
                        };
                    })
                    };
                // console.log(eklenecekSira);
                alan.appendChild(eklenecekSira);
                _koridorTaslak.x.forEach(element => {
                    if (_x<element && element<_x+1){
                        eklenecekSira = document.createElement("div");
                        eklenecekSira.classList.add("sira");
                        for (let _y = 1; _y < _koltukTaslak.x+1; _y++) {
                            eklenecekOge = document.createElement("div");
                            eklenecekOge.classList.add("koridor");
                            eklenecekSira.appendChild(eklenecekOge);
                        }
                        alan.appendChild(eklenecekSira);
                    };
                });
            }
            
            // Sinemaların eklenmesi için ayrı bir alan
            if(sinemalar.childElementCount < 2 || salonlar.childElementCount < 1){
                // yaz(keys(_sinemalar).length );
                // for (let index = 0; index < Object.keys(_sinemalar).length ; index++) {
                //     // sinemalar.options[sinemalar.options.length] = new Option(_sinemalar[index].ad, Object.keys(dataobj.sinemalar)[index]);
                //     eklenecekSinema = document.createElement('option');
                //     eklenecekSinema.textContent =  _sinemalar[index].ad;
                //     eklenecekSinema.value = Object.keys(dataobj.sinemalar)[index];
                //     sinemalar.appendChild(eklenecekSinema);
                // }

                // Object.entries ile key-value çiftlerini alıp forEach ile okuyalım (ChatGPT)
                Object.entries(_sinemalar).forEach(([key, value]) => {
                    if (value.gosterimdeMi) {
                        eklenecekOge = document.createElement('option');
                        eklenecekOge.textContent = value.ad;
                        eklenecekOge.value = key;
                        sinemalar.appendChild(eklenecekOge);
                    };
                });
                Object.keys(_salonlar).forEach(element => {
                    // if (value.gosterimdeMi) {
                        eklenecekOge = document.createElement('option');
                        eklenecekOge.textContent = element;
                        eklenecekOge.value = element;
                        salonlar.appendChild(eklenecekOge);
                    // };
                });
            }

            // Mesaj ayarlanması için ayrı bir alan
            mesaj.textContent = varsMesaj;
            // case 
    }
}

veriislem("kurulum",1);