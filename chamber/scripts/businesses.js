const requestURL = 'json/data.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['businesses'];

        let gold = business.filter(tier => tier.membership == 'Gold' || tier.membership== 'Silver');

        document.querySelectorAll('.spotSection').forEach(businesses => {
            spotlight(gold);
        });
});

function spotlight(gold) {
    let spot = gold[Math.floor(Math.random() * gold.length)];

    display(spot);
}

function display(spot) {
    let name = document.createElement('h4');
    let phone = document.createElement('p');
    let logo = document.createElement('img');

    name.textContent = spot.name;
    phone.textContent = spot.phone;
    
    logo.src = spot.imagesrc;
    logo.alt = spot.name;

    document.querySelector('.spotlightImage').appendChild(logo);
    document.querySelector('.businessName').appendChild(name);
    document.querySelector('.businessPhone').appendChild(phone);
}