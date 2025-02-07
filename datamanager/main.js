/**
 * @typedef {{nev: String, eletkor: Number}} Person
 * 
 * @callback Updatecalback
 * @param {Person[]} persons
 * @returns {void}
 */
class DataManager {
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {Updatecalback}
     */
    #updatecallback
    /**
     * @param {Person[]} array
     */
    constructor(array = []) {
        this.#array = array
        this.#updatecallback = () => {}
    }
    /**
     * @param {Updatecalback} callback
     */
    setUpdatecalback(callback) {
        this.#updatecallback = callback
        this.#updatecallback(this.#array)
    }
    /**
     * 
     * @param {Person[]} person 
     */
    add(person) {
        this.#array.push(person)
        this.#updatecallback(this.#array)
    }
    /**
     * 
     * @param {String} name 
     */
    filterName(name) {
        const result = []
        for(const elem of this.#array) {
            if(elem.nev.includes(name)) {
                result.push(elem)
            }
        }
        this.#updatecallback(result)
    }
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age) {
        const result = []
        for(const elem of this.#array) {
            if(elem.eletkor === age) {
                result.push(elem)
            }
        }
        this.#updatecallback(result)
    }
    fiter(filterCallback) {
        const result = []
        for(const person of this.#array) {
            if(filterCallback(person)) {
                result.push(elem)
            }
        }
        this.#updatecallback(result)
    }
}

class DataTable {
    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager) {
        const table = document.createElement('table')
        document.body.appendChild(table)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        dataManager.setUpdatecalback((persons) => {
            tbody.innerHTML = ""
            for(const elem of persons) {
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const td1 = document.createElement('td')
                td1.innerHTML = elem.nev
                tr.appendChild(td1)

                const td2 = document.createElement('td')
                td2.innerHTML = elem.eletkor
                tr.appendChild(td2)
            }
        })
    }
}

const dm = new DataManager([{nev: 'Sigma', eletkor: 69}, {nev: 'Ohio', eletkor: 9}, {nev: 'Fanum Tax', eletkor: 1}])
console.log(dm)

const dt = new DataTable(dm)

const input = document.createElement('input')
input.type = "file"
document.body.appendChild(input)

dm.filter

input.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsText(file)
    fileReader.onload = () => {
        const fileContent = fileReader.result
        const stringArray = fileContent.split('\n')
        for(const elem of stringArray) {
            const data = elem.split(';')
            const person = {nev: data[0], eletkor: Number(data[1])}
            dm.add(person)
        }
    }
})