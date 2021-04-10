// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(countryURL) {
  fetch(countryURL)
  .then(response => response.json())
    .then(data => onCountryDataReceived(data))
  console.log(countryURL);
}


function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {
  // console.log("country data =", countryData[0].name);
  
  let targetDiv = document.getElementById("content");
  let countryH1 = document.createElement("h1");
  targetDiv.appendChild(countryH1);
  countryH1.textContent = `${countryData[0].name}`;
  
}
// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
/*Create a h2 tag on the website using DOM manipulation and add the capital city's name inside it*/
function addCountryCapital(countryData) {
  // console.log("country data =", countryData[0].captial);

  let targetDiv = document.getElementById("content");
  let countryH2 = document.createElement("h2");
  targetDiv.appendChild(countryH2);
  countryH2.textContent = `${countryData[0].capital}`;
}
// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
/*Create a ul tag on the website using DOM manipulation 
For each of the translated names in the JSON, add a li tag */
function addNameInOtherLanguages(countryData) {
// console.log("country data =", countryData[0].captial);

  let targetDiv = document.getElementById("content");
  
  let ul = document.createElement("ul");
  targetDiv.appendChild(ul);

  let li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = `${countryData[0].capital}`
  // li.style.listStyle = "none";
}

function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData(
    "https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true");
  

    // Remove this line when you have completed the task

    getData("https://restcountries.eu/rest/v2/name/France?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Germany?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Spain?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Portugal?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Hungary?fullText=true");

    // getData("https://restcountries.eu/rest/v2/name/Russia?fullText=true");

    // Remove this line when you have completed the task
}
window.onload = onLoad;