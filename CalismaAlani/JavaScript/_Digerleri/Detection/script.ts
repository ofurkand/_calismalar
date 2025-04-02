const h1 = document.getElementById("h1") as HTMLElement | null;

fetch('http://example.com/', {
    method: 'GET',
    mode: 'no-cors'
})
    .then(response => console.log('Request was successful'))
    .then(data => {
        if (h1) {  // Null kontrolü
            h1!.textContent = data;
        } else {
            console.error("h2 öğesi bulunamadı.");
        }
    })
    .catch(error => console.error('Request failed', error));