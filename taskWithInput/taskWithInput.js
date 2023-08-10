
let ageForm = document.getElementById("ageForm");

ageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let age = parseInt(document.getElementById("ageV").value);

    checkTheAge(age);
});


function checkTheAge(age) {
    if (age > 18) {
        let divTag = document.getElementById("result");
        let tempHtml = 'Hello, go to your secret page: ';
        divTag.innerHTML = `${tempHtml} <a href="https://www.youtube.com/">Secret page</a>`
    } else {
        ageForm.style.display = 'none';
        let divTagB = document.getElementById("badResult");
        divTagB.innerHTML = 'Age restriction';
    }
}