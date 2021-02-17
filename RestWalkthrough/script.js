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
        `
        div.innerHTML = countryInfo;
        section.appendChild(div);
        
    });
 };