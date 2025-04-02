var h1 = document.getElementById("h1");
// fetch('http://example.com/', {
//     method: 'GET',
//     mode: 'no-cors'
// })
//     .then(function (response) { return console.log('Request was successful'); })
//     .then(function (data) {
//     if (h1) { // Null kontrolü
//         h1.textContent = data;
//         cons
//     }
//     else {
//         console.error("h2 öğesi bulunamadı.");
//     }
// })
//     .catch(function (error) { return console.error('Request failed', error); });

fetch('http://eyfez.com/', {
    method: 'GET',
    mode: 'no-cors'
})
    .then(response => console.log('Request was successful' , response))
    .then(data => {
        console.log(data.json());
    })
    .catch(error => console.error('Request failed', error));