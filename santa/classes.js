
class Factory {
 // TODO 1, 2, 3, 4, 9, 10
    constructor() {
        this.manoList = [];
        this.areaList = [];
    }
    addMano(mano) {
        this.manoList.push(mano);
        createRow(mano);
        appendToSelector(mano)
    }
    createID() {
        return this.manoList.length;
    }
    getMano(id) {
        return this.manoList[id];
    }
    addProductToMano(companionID, productName) {
        const companion = this.getMano(companionID);
        if (companion) {
            companion.addProduct(productName);
            refreshProductList(companion);
        }
    }
    addArea(area) {
        if (area || !this.areaList.includes(area)) {
            this.areaList.push(area);
            const select = document.getElementById('carea');
            const option = document.createElement('option');
            option.value = area;
            option.innerHTML = area;
            select.appendChild(option);
        }
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
    addProduct(product) {
        this.products.push(product);
    }
    getName() {
        return this.keresztnev + " " + this.vezeteknev;
    }
}