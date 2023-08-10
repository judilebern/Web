
let imgBtn = document.getElementsByTagName("img");
console.log(imgBtn);

imgBtn[0].addEventListener('click', funcforclick);

function funcforclick() {
    let firstNumber = parseInt(document.getElementById("fnum").value);

    let secondNumber = parseInt(document.getElementById("snum").value);

    let suma = sum(firstNumber, secondNumber);
    let atimtis = minus(firstNumber, secondNumber);
    let daugyba = multiply(firstNumber, secondNumber);
    let dalyba = devide(firstNumber, secondNumber);

    const firstResultGroup = [suma, atimtis, daugyba, dalyba];
    resultFirstGroup(firstResultGroup, firstNumber, secondNumber);

    xIncrease(firstNumber, secondNumber);
    yIncrease(firstNumber, secondNumber);
}


function sum(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function devide(x, y) {
    return x / y;
}

function xIncrease(firstNum, secondNum) {
    let divTag = document.getElementById("result2");
    let introText = `Numbers [ ${firstNum} : ${secondNum} ] --`;
    divTag.innerHTML = "<p>Results as x increases: </p>";

        for (let i = 0; i < 5; i++) {
            let introText = `Numbers [ ${firstNum} : ${secondNum} ] --`;
            let resultAdd = sum(firstNum, secondNum);
            let resultSubtract = minus(firstNum, secondNum);
            let resultDivide = multiply(firstNum, secondNum);
            let resultMultiply = devide(firstNum, secondNum);

            divTag.innerHTML += `
      <p>
        ${introText} addition: ${resultAdd} <br>
        ${introText} subtraction: ${resultSubtract} <br>
        ${introText} division: ${resultDivide} <br>
        ${introText} multiplication: ${resultMultiply}
      </p>
    `;
            firstNum++;
        }
    }

function yIncrease(firstNum, secondNum) {
    let divTag = document.getElementById("result3");
    divTag.innerHTML = "<p>Results as Y increases: </p>";

    for (let i = 0; i < 10; i++) {
        let introText = `Numbers [ ${firstNum} : ${secondNum} ] --`;
        let resultAdd = sum(firstNum, secondNum);
        let resultSubtract = minus(firstNum, secondNum);
        let resultDivide = multiply(firstNum, secondNum);
        let resultMultiply = devide(firstNum, secondNum);

        divTag.innerHTML += `
      <p>
        ${introText} addition: ${resultAdd} <br>
        ${introText} subtraction: ${resultSubtract} <br>
        ${introText} division: ${resultDivide} <br>
        ${introText} multiplication: ${resultMultiply}
      </p>
    `;
        secondNum += 2;
    }
}

function resultFirstGroup(array, firstNum, secondNum) {
    let divTag = document.getElementById("result");
    let introText = `Numbers [ ${firstNum} : ${secondNum} ] --`;
    let tempHtml = "";

    tempHtml = `
      <p>
        ${introText} addition: ${array[0]} <br>
        ${introText} subtraction: ${array[1]} <br>
        ${introText} division: ${array[2]} <br>
        ${introText} multiplication: ${array[3]}
      </p>
      `

    divTag.innerHTML = tempHtml;
}

