/*
* ========================================================================
* UZDUOTIS 1
* ========================================================================
* */
const objektas = {
    name: 'Vardenis',
    toysArray: ['meskinas', 'kaladele', 'lele', 'briedis'],
    yearsOld: 15,
    birthday: true,
    totalToys: null,
    friends: [
        person1 = {
            name: 'Petras',
            veikla: 'dainuoja'
        },
        person2 = {
            name: 'Onyte',
            veikla: 'soka'
        },
        person3 = {
            name: 'Janina',
            veikla: 'soka'
        }
    ]
}

arGimtadienis();

function arGimtadienis() {
    if (objektas.birthday === true) {
        objektas.toysArray.shift();

        objektas.toysArray.push('naujas zaislas');

        objektas.yearsOld += 1;

        objektas.totalToys = objektas.toysArray.length;

        console.log(`Draugai ir ju veiklos:  ${JSON.stringify(objektas.friends)}`)
    } else {
        console.log('Ne gimtadienis');
    }
}

/*
* ========================================================================
* UZDUOTIS 2
* ========================================================================
* */
const person = {
    name: 'Rosa',
    age: 120,
    alive: false,
    interests: ['swimming', 'cards']
}

person.name = 'Rosalinda';

person.age = Math.floor(Math.random() * (120 - 20 + 1)) + 20;

if (person.age < 100) {
    person.alive = true;
    person.interests.push('enjoying life');
}

console.log(person);