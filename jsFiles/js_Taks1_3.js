// UZDUOTIS 1
/*Sukurkite kintamąjį a ir priskirkite jam reikšmę 1.
Atspausdinkite kintamojo reikšmę kartu su tekstu
'Kintamojo a reikšmė: '. Tuomet pskeiskite kintamojo
reikšmę į 2 atspausdinkite rezultatą tuo pačiu formatu.
    Rez.:
Kintamojo a reikšmė: 1
Kintamojo a reikšmė: 2*/


let aaa = 1;

console.log('Kintamojo a reikšmė: ' + aaa);

aaa = 2;

console.log('Kintamojo a reikšmė: ' + aaa);


// UZDUOTIS 2
/*
Sukurkite kintamąjį b ir priskirkite jam reikšmę 'Jūsų
vardas'. Atspausdinkite kintamojo reikšmę kartu su
kintamojo c tekstu 'Mano vardas '*/

let bbb = 'Judile';

console.log('Mano vardas ' + bbb);


// UZDUOTIS 3
/*Parašykite skriptą, kuris iš jūsų gimimo datos (let metai, let
mėnuo, let diena) paskutinių skaitmenų sudarytų skaičių
sumą ir ją parodykite developer tools konsolėje
PVZ-1: Jei gimimo data yra 1999 12 28, tai suma bus lygi 19
PVZ-2: Jei gimimo data yra 2000 01 01, tai suma bus lygi 2*/

let metai = 1999;
let menuo = 12;
let diena = 10;

console.log('Mano gimimo data yra ' + metai + '-' + menuo + '-' + diena);

let sum = metai % 10 + menuo % 10 + diena % 10;

console.log('Paskutiniu skaitmenu suma ' + sum);

/* ===============================================================================================
1. Duoti du sveikųjų skaičių intervalai [a; b] ir [c; d], kur a ≤ c. Sudarykite programą, kuri nustatytų,
    ar egzistuoja šių intervalų sankirta ir, jeigu sankirta egzistuoja, tai raskite jos rėžius [x; y].*/
let resultForThe21Task = '';
let a = -5;
let b = 0;
let c = -4;
let d = 4;
    if (c >= a && b <= d) {
        resultForThe21Task = 'Taskai: ' + c + ' ' + b;
        console.log(resultForThe21Task);
    } else if (c >= a && b >= d) {
        resultForThe21Task = 'Taskai: ' + + ' ' + d;
        console.log(resultForThe21Task);
    } else {
        console.log('Nesugalvoju daugiau salygu, turbut visi variantai cia');
    }



// UZDUOTIS
/* ===============================================================================================
4.Sukurkite studento objektą, naudokite tuos pačius duomenis (vardas, pavarde, ...).*/

let student = {
    firstName: 'Ona',
    lastName: 'Onyte'
}


/* ===============================================================================================
5. Sukurkite Objektų masyvą pagal katik sukurto Studento objekto struktura.*/
let students = [
    {
        firstName: 'Harry',
        lastName: 'Potter'
    },
    {
        firstName: 'Hermiona',
        lastName: 'Granger'
    },
    {
        firstName: 'Ron',
        lastName: 'Weasley'
    },
    {
        firstName: 'Albus',
        lastName: 'Dumbledore'
    },
    {
        firstName: 'Severus',
        lastName: 'Snape'
    },
    {
        firstName: 'Draco',
        lastName: 'Malfoy'
    },
    {
        firstName: 'Neville',
        lastName: 'Longbottom'
    }
]

/*
6. Išveskite penkto objekto duomenis (vienas bendras console.log()).*/

console.log(students[5]);

/* ===============================================================================================
7. Išveskite tokį patį informacinį sakinį iš objekto duomenų kaip prieš tai išvedėte iš paprastų
kintamųjų ("Tomas Tomauskas mokosi KTU, 4 kurse, jo pažymiai: [7, 4, 5].").
Išbandykite tiek dot notation, tiek bracket notation traukiant duomenis iš masyvo.*/

console.log('Studentas, kurio vardas: ' + students[1].firstName + ' pavarde: ' + students[1].lastName + ' mokose 5 kurse');

console.log('Studentas, kurio vardas: ' + students[6]["firstName"] + ' pavarde: ' + students[6]["lastName"] + ' mokose 5 kurse');

/* ===============================================================================================
8. Išveskite visus studento pažymius, esančius objekte. Naudojant for ciklą.*/

let students2 = [
    {
        firstName: 'Harry',
        lastName: 'Potter',
        course: 4,
        grade: [10, 9, 8, 9, 10]
    },
    {
        firstName: 'Hermiona',
        lastName: 'Granger',
        course: 6,
        grade: [10, 10, 10, 10]
    },
    {
        firstName: 'Ron',
        lastName: 'Weasley',
        course: 4,
        grade: [8, 7, 6, 9, 10]
    },
    {
        firstName: 'Albus',
        lastName: 'Dumbledore',
        course: 5,
        grade: [10, 9, 10, 8]
    },
    {
        firstName: 'Severus',
        lastName: 'Snape',
        course: 3,
        grade: [8, 9, 10, 7]
    },
    {
        firstName: 'Draco',
        lastName: 'Malfoy',
        course: 8,
        grade: [8, 9, 6, 3]
    },
    {
        firstName: 'Neville',
        lastName: 'Longbottom',
        course: 4,
        grade: [8, 9, 7, 5]
    }
]


for (let i = 0; i < students2.length; i++) {
    console.log(students2[i].firstName + '' + students2[i].lastName + ' mokosi ' + students2[i].course + ' jo pazymiai yra ' + students2[i].grade);
}

/* ===============================================================================================
9. Pakelkite tris pasirinktus pažymius per vieną skaičių. Tačiau atkreipkite dėmesį ar keliamas pažymys gali būti
pakeltas (jei dar ne max), jei jis jau ir taip yra 10, tuomet palikite tokį koks yra.*/

let grades = [9, 10, 6, 7, 9, 10, 10, 8, 7];
console.log(grades);

for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== 10) {
        grades[i] = grades[i] + 1;
    }
}

console.log(grades);

/* ===============================================================================================
10. Suskaičiuokite ir išveskite trijų pasirinktų pažymių sumą.*/

let sum1 = grades[2] + grades[5] + grades[8];
console.log('Sum of three numbers: ' + sum1);


/* ===============================================================================================
11. Suskaičiuokite ir išveskite dviejų pasirinktų pažymių sandaugą.*/

let mult = grades[2] * grades[7];
console.log('Multiplicaiton: ' + mult);


/* ===============================================================================================
12. Patikrinkite ar kursas yra numeral tipo.*/
console.log(typeof grades[2]);


/*  ===============================================================================================
13. Patikrinkite ar studentas mokosi ketvirtame kurse ir ar ši reikšmė yra kaip numeral (===).*/
if ( students2[0]['course'] === 4 ) {
    console.log('Studentas ketvirtakursis ir skaicius numeral');
} else {
    console.log('Studentas NEketvirtakursis ARBA skaicius NEnumeral');
}

/*  ===============================================================================================
14. Patikrinkite visus studentus ar jie mokosi ketvirtame kurse. Jeigu studentas mokosi ketvirtame kurse,
    išveskite tekstą "studentas <Vardas Pavardė> yra abiturientas", kitu atveju "Studentui <Vardas Pavardė> dar
    toli iki mokslų baigimo".*/

for (let i = 0; i < students2.length; i++) {
    if (students2[i]['course'] === 4) {
        console.log(students2[i]['firstName'] + ' ' + students2[i]['lastName'] + ' yra abituriantas');
    } else {
        console.log('Stundentui ' + students2[i]['firstName'] + ' ' + students2[i]['lastName'] + ' dar toli iki baigimo');
    }
}

/*  ===============================================================================================
15. Sukurkite funkciją vardu "suma", kuri priima du skaičius kaip argumentus ir grąžintų jų sumą.*/

function suma(number1, number2) {
    return number1 + number2;
}

/*  ===============================================================================================
16. Naudodami šią funkciją, parašykite kodą, kuris atspausdina visų skaičių nuo 1 iki 100 sumą.*/
let result = 0;

for (let i = 100; i >= 0; i--) {
    result = suma(result, i);
}

console.log('Suma 100 skaiciu:  ' + result);

/*  ===============================================================================================
17. Sukurti funkcija/metoda kuris sudetu lyginius arba nelyginius pateikto masyvo elementus.*/

let numbersArray = [1, 3, 6, 5, 7, 2, 2, 4, 4, 8];
let numberTypeForSum = 'odd';

function sudeti(array, numberType) {
    let numbersSum = 0;
    if (numberType === 'odd') {
        for (let i = 0; i < array.length; i++) {
            if(array[i] % 2 !== 0) {
                numbersSum = numbersSum + array[i];
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if(array[i] % 2 === 0) {
                numbersSum = numbersSum + array[i];
            }
        }
    }
    return numbersSum;
}

console.log('Odd / Even sum: ' + sudeti(numbersArray, numberTypeForSum));

/*  ===============================================================================================
18.Sukurti funkcija/metoda kuris sudetu lyginiu arba nelyginių indeksų reikšmes */

function sumByIndex(array, numberType) {
    let numbersSuma = 0;

    if (numberType === 'odd') {
        for (let i = 0; i < array.length; i++) {
            if(i % 2 !== 0) {
                numbersSuma = numbersSuma + array[i];
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if(i % 2 === 0) {
                numbersSuma = numbersSuma + array[i];
            }
        }
    }
    return numbersSuma;
}

console.log('Odd / Even index sum: ' + sumByIndex(numbersArray, numberTypeForSum));


/*  ===============================================================================================
19. Sukurt atsitiktinių skaicių į masyvą generatorių, kuriam nurodytume kiek masyvo elementu bus sukuriama.*/
let lengthForArray = 8;

function generateArrayOfNumbers(lengthA) {
    let arr = new Array(lengthA);
    for (let i = 0; i < lengthA; i++) {
        arr[i] = Math.floor(Math.random() * 11);
    }
    return arr;
}

console.log(generateArrayOfNumbers(lengthForArray));

/*  ===============================================================================================
20. Sukurti atsitiktinių raidžių į masyvą generatorių.*/
function generateArrayOfLetters(lengthA) {
    let arrayOfLetters = new Array(lengthA);
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < lengthA; i++) {
        arrayOfLetters[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return arrayOfLetters;
}

console.log(generateArrayOfLetters(lengthForArray));

/*  ===============================================================================================
21. Rezultatus iš pirmos užduoties įrašyti į tekstinio tipo Input laukelį.*/

document.getElementById("text").placeholder = resultForThe21Task;


/*  ===============================================================================================
22. Is input text tipo laukelio paimti tekstą ir ji konvertuoti i masyvą. Gautą masyvą perduoti į pirmos uzduoties sudeti funkciją,
kai paspaudžiam mygtuką.*/

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', funcA);

function funcA() {
    let info = document.getElementById("textMy").value;
    //sukuriu array:
    let arrayFromInput = info.split(", ");
    let arrFromInput = new Array(arrayFromInput.length);
    //suparsinu i skaicius:
    for (let i = 0; i < arrayFromInput.length; i++) {
        arrFromInput[i] = parseInt(arrayFromInput[i]);
    }

    //suskaiciuoju suma:
    let resultOfTask = 0;
    for (let i = 0; i < arrFromInput.length; i++) {
        resultOfTask = resultOfTask + arrFromInput[i];
    }

    console.log(resultOfTask);
}


