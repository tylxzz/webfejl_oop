
class Factory {
 // TODO 1, 2, 3, 4, 9, 10
    constructor() {
        this.manoList = [];
    }
    addMano(mano) {
        this.manoList.push(mano);
        createRow(mano);
    }
}

class Companion {
 // TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg) {
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.products = []; 
    }
    addPrduct(product) {
        this.products.push(product);
    }
    getName() {
        return this.keresztnev + " " + this.vezeteknev;
    }
}