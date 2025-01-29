class ArrayList {
    /**
     * @type {Number}
     */
    #count
    #state
    #arraytable
    get Count() {
        return this.#count
    }
    constructor(array = undefined) {
        this.#count = 0
        this.#state = {}
        this.#arraytable = array
    }
    Add(element) {
        const index = this.#count
        this.#state[index] = element
        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]
            },
            set: (value) => {
                this.#state[index] = value
            },
            enumerable: true,
            configurable: true
        })
        this.#count++
        if(this.#arraytable) {
            this.#arraytable.addPersonRow(element)
        }
    }
    Clear() {
        this.#count = 0
        for(const s in this.#state) {
            delete this.#state[s]
            delete this[s]
        }
    }
    Contains(element) {
        for(const s in this.#state) {
            if(this.#state[s] === element) {
                return true
            }
        }
        return false
    }
}

class TableHTMLArray 
extends HTMLElement {
    #tbody
    constructor() {
        super()
    }
    connectedCallback() {
        const table = document.createElement('table')
        this.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)
    }
    /**
     * 
     * @param {{nev: String, eletkor: Number}} person 
     */
    addPersonRow(person) {
        const tr = document.createElement('tr')
        this.#tbody.appendChild(tr)

        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        td1.innerHTML = person.nev
        td2.innerHTML = person.eletkor

        tr.appendChild(td1)
        tr.appendChild(td2)
    }
}
customElements.define('array-table', TableHTMLArray)
const dingdong = new TableHTMLArray()
document.body.appendChild(dingdong)
dingdong.addPersonRow({nev: 'Lali', eletkor: 23})
dingdong.addPersonRow({nev: 'Feri', eletkor: 12})
dingdong.addPersonRow({nev: 'Zoli', eletkor: 42})
dingdong.addPersonRow({nev: 'Jani', eletkor: 43})
dingdong.addPersonRow({nev: 'Pisti', eletkor: 23})

const alma = {}
Object.defineProperty(alma, 'nev', {value: 'Ferenc', writable: true})
alma.nev = 'asd'
console.log(alma)

const list = new ArrayList()
list.Add("c1")
console.log(list)
list.Add("n2")
console.log(list)

console.log(list[0])

const array = new ArrayList()
array.Add(1)
array.Add(2)
array.Add(3)
array.Add(4)
array.Add(5)
console.log(array)
console.log(array.Count)
console.log(array.Contains(3))
console.log(array.Contains(6))
console.log(array.Clear())
console.log(array.Count)

const button = document.createElement('button')
button.innerText = 'Új személy hozzáadása';
document.body.appendChild(button)

button.addEventListener('click',  function(e) {
    e.preventDefault()

    const newPerson = {
        nev: 'Ismeretlen',
        eletkor: Math.floor(Math.random() * 50)
    }
    dingdong.addPersonRow(newPerson)
})