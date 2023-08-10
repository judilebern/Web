
let formElement = document.querySelector('form');

formElement[0].addEventListener('focus', function (e) {
    if (document.querySelector('div') !== null) {
        document.querySelector('div').remove();
    }
});

formElement[0].addEventListener('blur', function (e) {

        let inputValue = e.target.value;
        if (inputValue > 0 && inputValue < 99) {
            infoForTrueEvent(inputValue);
        } else {
            infoForElseEvent(inputValue);
        }
});

function infoForElseEvent(inputValue) {
    let divThenNot = document.createElement('div');
    divThenNot.innerText = `Tai yra ne skaičius ARBA mažesnis už 0 ARBA didesnis už 99, jūs įvedėte ${inputValue}`;
    divThenNot.style.background = '#F06D5E';
    divThenNot.style.color = '#690404';
    divThenNot.style.border = '1px solid black';
    divThenNot.style.marginTop = '15px';
    formElement.append(divThenNot);
}

function infoForTrueEvent(inputValue) {
    let divThenTrue = document.createElement('div');
    divThenTrue.innerText = `Tai yra ne skaičius ARBA mažesnis už 0 ARBA didesnis už 99, jūs įvedėte ${inputValue}`;
    divThenTrue.style.background = '#67e783';
    divThenTrue.style.color = '#0C7325';
    divThenTrue.style.border = '1px solid black';
    divThenTrue.style.marginBottom = '15px';
    formElement.prepend(divThenTrue);
}