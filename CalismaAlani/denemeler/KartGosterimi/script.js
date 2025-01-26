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

// let myData; 

// fetchData(url).then(data => {
//   myData = data; 
//   console.log(myData); 
// });

const kaynakURL = 'varliklar/veriler/ana_veriler.json'; 
const yaz = (yazi) => console.log(yazi);

async function veriislem (islem="kurulum",veri=0) 
{
    let response = await fetch(kaynakURL);
    let dataobj = await response.json();
    yaz(dataobj);
}

veriislem();