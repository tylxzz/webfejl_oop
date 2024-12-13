const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person {
    constructor(object) {
        this.firstname1 = object.firstname1;
        this.firstname2 = object.firstname2;
        this.lastname = object.lastname;
    }
    render(parent) {
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        
        parent.appendChild(row);
        row.appendChild(td1);
        row.appendChild(td2);
        
        td1.innerHTML = this.lastname;
        td2.innerHTML = this.firstname1;
        
        if(!this.firstname2) {
            td2.colSpan = 2;
        }
        else {
            const td3 = document.createElement('td');
            row.appendChild(td3);
            td3.innerHTML = this.firstname2;
        }
    }
}

class FormController {
    #form
    get lastname() {
        const v = this.#getInput('lastname');
        return v.value;
    }
    get firstname1() {
        const v = this.#getInput('firstname1');
        return v.value;
    }
    get firstname2() {
        const v = this.#getInput('firstname2');
        return v.value;
    }
    constructor(form) {
        this.#form = form;
    }
    #getInput(id) {
        return this.#form.querySelector('#' + id);
    }
}

function init() {
    const tbody = document.getElementById('tbodyId');
    const form = document.getElementById('form');
    const controller = new FormController(form);
    for(const elem of array) {
        const person = new Person(elem);
        person.render(tbody);
    }
}

init();