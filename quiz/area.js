class Area {
    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @returns {HTMLDivElement} visszater az aktualis terulettel, 
     * ami azelemeket tartalmazza
     */
    get div() {
        return this.#div
    }

    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass) {
        const container = this.#getCotainer()
        this.#div = document.createElement('div')
        this.#div.className = cssClass
        container.appendChild(this.#div)
    }

    /**
     * Letrehozza a container classal rendelkezo elemet
     * amelyen belul a div lesz megtalalhato
     * Ha mar letezik, akkor a mar letezot adja vissza
     * 
     * @returns {HTMLDivElement} containert tartalmazza 
     */
    #getCotainer() {
        let container = document.querySelector(".container")
        if(!container) {
            container = document.createElement('div')
            container.className = 'container'
            document.body.appendChild(container)
        }
        return container
    }

}

/**
 * Ez a terulet fogja tartalmazni a kerdest
 */
class QuestionArea extends Area{
    constructor(cssClass) {
        super(cssClass) // az os class konstruktorat hivja meg
    }
}

/**
 * Ez a terulet fogja tartalmazni a valaszt
 */
class AnswerArea extends Area {
    constructor(cssClass) {
        super(cssClass)
    }
}