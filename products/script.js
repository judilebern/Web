const body = document.body;
const main = document.createElement('main');
const nav = document.createElement('nav');



fetch('products.json')
    .then((response) => response.json())
    .then((products) =>
        mainF(products));



function mainF(products) {
    displayProducts(products);
    filterByPrice();
    titleFilter(products);
    manufacturerFilter(products);
}

function displayProducts(products) {

    for (let i = 0; i < products.length; i++) {

        const div = document.createElement("div");

        div.innerHTML = `${products[i].title.toUpperCase()} <br><hr>
                Kaina:  ${products[i].price} <br>
                Gamintojas:  ${products[i].manufacturer} <br>
                Medziaga:  ${products[i].material} <br>
                Turimas kiekis:  ${products[i].quantity} <br>
            `;
        main.append(div);

    }
    body.append(main);
}

function filterByPrice() {
    let result = [];
//sukuriam filtra:
    let divSlider = document.createElement('div');
    divSlider.className = "slidecontainer";
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.type = "text";
    input.className = "inputMin";
    input.id = "inputMin";
    label.htmlFor = 'inputMin';
    label.innerText = 'Kaina nuo';

    let input2 = document.createElement('input');
    let label2 = document.createElement('label');
    input2.type = "text";
    input2.className = "inputMax";
    input2.id = "inputMax";
    label2.htmlFor = 'inputMax';
    label2.innerText = 'Kaina iki';

    divSlider.append(label);
    divSlider.append(input);
    divSlider.append(label2);
    divSlider.append(input2);

    nav.prepend(divSlider);
    body.prepend(nav);

    //nuskaitom reiksmes

    input.addEventListener("blur", (event) => {
        event.preventDefault();
        result[0] = event.target.value;
    });

    input2.addEventListener("blur", (event) => {
        event.preventDefault();
        result[1] = event.target.value;
    });

    return result;
}

function titleFilter(products) {
    let form = document.createElement('form');
    let label = document.createElement('label');
    label.htmlFor = "title";
    label.innerText = "Pavadinimas";

    let select = document.createElement('select');
    select.name = 'title';
    select.id = 'title';
    select.multiple;

    for (let i = 0; i < products.length; i++) {
        let option = document.createElement('option');

        option.value = `${products[i].title}`;
        option.innerText = `${products[i].title}`;

        select.append(option);
    }

    form.append(label);
    form.append(select);

    let input = document.createElement('input');
    input.type = 'submit';

    form.append(input);

    nav.append(form);
}

function manufacturerFilter(products) {
    let form = document.createElement('form');
    let label = document.createElement('label');
    label.htmlFor = "manufacturer";
    label.innerText = "Gamintojas";

    let select = document.createElement('select');
    select.name = 'manufacturer';
    select.id = 'manufacturer';
    select.multiple;

    for (let i = 0; i < products.length; i++) {
        let option = document.createElement('option');

        option.value = `${products[i].manufacturer}`;
        option.innerText = `${products[i].manufacturer}`;

        select.append(option);
    }

    form.append(label);
    form.append(select);

    let input = document.createElement('input');
    input.type = 'submit';

    form.append(input);

    nav.append(form);
}



