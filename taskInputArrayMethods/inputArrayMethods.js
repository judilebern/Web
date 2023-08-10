let array = [];

const body = document.body;
const input = document.createElement('input');

const btn1 = button('pop');

const btn2 = button('push');

const btn3 = button('shift');

const btn4 = button('unshift');

const p = document.createElement('p');
p.id = 'output';

createButtonEventListener(btn1, 'button1');
createButtonEventListener(btn2, 'button2');
createButtonEventListener(btn3, 'button3');
createButtonEventListener(btn4, 'button4');


body.append(input);
body.append(btn1);
body.append(btn2);
body.append(btn3);
body.append(btn4);
body.append(p);


function method(result, name) {
    if (name === 'button1') {
        array.pop();
        p.innerHTML = `Turimas masyvas: ${array}`;
        input.value = "";
    } else if (name === 'button2') {
        array.push(result);
        p.innerHTML = `Turimas masyvas: ${array}`;
        input.value = "";
    } else if (name === 'button3') {
        array.shift();
        p.innerHTML = `Turimas masyvas: ${array}`;
        input.value = "";
    } else {
        array.unshift(result);
        p.innerHTML = `Turimas masyvas: ${array}`;
        input.value = "";
    }
}

function button(title) {
    const btn = document.createElement('button');
    btn.innerHTML = title;
    btn.type = "submit";
    btn.name = "btn";
    return btn;
}

function createButtonEventListener(button, name) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        let result = input.value;
        method(result, name);
    });
}
