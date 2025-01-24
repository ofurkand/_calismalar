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

const main = document.getElementsByTagName('main');

let salonOlustur = () => {
    
}

let veriler = async function () 
{
    let response = await fetch(verilerUrl);
    let dataobj = await response.json();
    console.log(dataobj);
}
