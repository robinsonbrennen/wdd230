const requestURL = 'json/data.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['businesses'];
        business.forEach(createCards);
    });

function createCards(business) {
    let buscards = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let membership = document.createElement('p');
    let imgsrc = document.createElement('img');

    name.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    url.textContent = `${business.url}`;
    membership.textContent = `${business.membership}`;
    
    imgsrc.setAttribute('src', `${business.imgsrc}`);
    imgsrc.setAttribute('alt', `${business.name}`);
    imgsrc.setAttribute("loading", "lazy");

    buscards.appendChild(imgsrc)
    buscards.appendChild(name)
    buscards.appendChild(address)
    buscards.appendChild(phone)
    buscards.appendChild(url)
    document.querySelector('div.buscards').appendChild(buscards)
}

const gridButton = document.querySelector("#gridbutton");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("buscard");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("buscard");
});