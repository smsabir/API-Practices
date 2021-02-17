fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayData(data))

function displayData(countries){

    const section = document.getElementById("container");
    countries.forEach(country => {
        const div = document.createElement("div");
        div.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayDetails('${country.name}')">Details</button>
        `
        div.innerHTML = countryInfo;
        section.appendChild(div);
        
    });
 };

 const displayDetails= name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
 }

 const renderCountryInfo = country => {
     const countryDiv = document.getElementById('countryDetails');

     countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
     `
 }