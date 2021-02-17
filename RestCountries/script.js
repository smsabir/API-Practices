fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayData(data))

function displayData(data){
    const country = data.map(countries => countries.name);
    const section = document.getElementById("container");

    for (let i = 0; i < country.length; i++) {
        const countryName = country[i];
        const div = document.createElement("div");
        div.innerText = countryName;
        section.appendChild(div);
    }
    getName();
}


function getName(){

    let div = document.querySelectorAll("div");

    for (let i = 0; i < div.length; i++) {
        let divName = div[i];
        console.log(divName)
        divName.addEventListener("click",sendAlert); // Why sendAlert() does not work?

    }
}


function sendAlert(){

    let link = `https://restcountries.eu/rest/v2/name/${this.innerText}?fullText=true`;
    fetch(link)
    .then(res => res.json())
    .then(data => {
        alert('Capital: ' + data[0].capital + '\n' +
              'Population: ' + data[0].population + '\n' +
                'Area: ' + data[0].area
            );
    })
};