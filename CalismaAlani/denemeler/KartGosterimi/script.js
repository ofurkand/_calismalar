function fetchData(url) {
    return fetch(url)
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        return data; // Return the data as an object/dictionary
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

let myData; // Declare the variable outside of the function

const url = '../KartGosterimi/varliklar/veriler/ana_veriler.json'; // Sample API
fetchData(url).then(data => {
  myData = data; // Store the fetched data into the variable
  console.log(myData); // `myData` now contains the fetched object
});