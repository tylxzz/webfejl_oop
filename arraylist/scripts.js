class ArrayList {
    /**
     * @type {Number}
     */
    #count
    #state
    get Count() {
        return this.#count
    }
    constructor() {
        this.#count = 0
        this.#state = {}
    }
    Add(element) {
        const index = this.#count
        this.#state[index] = element
        Object.defineProperty(this, index, {
            get: function() {
                return this.#state[index]
            },
            set: function(value) {
                this.#state[index] = value
            },
            enumerable: true,
            configurable: true
        })
        this.#count++
    }
    Clear() {
        this.#count = 0
        this.#state = {}
    }
}

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