function getMenuData() {
    return [
        {
            href: '/cssSecondPartTasks/threeColumnInPage.html', title: 'Three Column In Page'
        },
        {
            href: '/cssSecondPartTasks/index.html', title: 'Task With Photos'
        },
        {
            href: '/RandomList/list.html', title: 'Random List'
        },
        {
            href: '/Tables/table.html', title: 'Table task'
        },
        {
            href: '/chessTask/chessTask.html', title: 'Chess Task'
        },
        {
            href: '/Forms/forms.html', title: 'Form task'
        },
        {
            href: '/GridTest/index.html', title: 'GRID Task'
        },
        {
            href: '/functions/functionsTask.html', title: 'Task With Functions'
        },
        {
            href: '/taskWithInput/taskWithInput.html', title: 'Task With Input'
        },
        {
            href: '/forms2/formsAndGetFromForms.html', title: 'Task With Froms 2'
        },
        {
            href: '/createElementsWithJs/createElements.html', title: 'Create HTML elements with JS'
        },
        {
            href: '/taskInputArrayMethods/inputArrayMethods.html', title: 'Task with input, array methods'
        },
        {
            href: '/objectsTask1/objectTask1.html', title: 'Object task 1'
        },
        {
            href: '/products/index.html', title: 'Products store'
        }
    ];
}


function kurtiMeniuElementa(href, title) {
    /*let menuElement = `<li><a href="${href}">${title}</a></li>`;*/
    let menuElement = document.createElement('li');
    let menuNuoroda = document.createElement('a');

    menuNuoroda.href = href;
    menuNuoroda.textContent = title;

    menuElement.append(menuNuoroda);
    return menuElement;
}

function generuotiMenu(kur) {
    let sarasas = document.createElement('ul');

    for (let i = 0; i < menuData.length; i++) {
        let href = menuData[i].href;
        let title =  menuData[i].title;

        let menuElement = kurtiMeniuElementa(href, title);

        sarasas.append(menuElement);

    }
    return sarasas;
}

const menuData = getMenuData();

let mainTag = document.querySelector('main');
let menu = generuotiMenu();

mainTag.append(menu);