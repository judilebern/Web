
let form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let surname = e.target.elements.surname.value;

    let result = document.getElementById("result");
    result.innerHTML = `Name: ${name} surname ${surname} <hr>`;
});