/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
    form.reset();
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory);
    form.reset();
});

document.getElementById('area').addEventListener('submit', function(e){
    e.preventDefault();
    const form = e.currentTarget;
    factory.addArea(form.areaName.value);
    form.reset();
})

/**
 * table render
 */
function initTable(){
    const uniqueArea = new Set();

    for (let i = 0; i < companionList.length; i++) {
        uniqueArea.add(companionList[i].area);
    }

    for (let area of uniqueArea) {
        factory.addArea(area);
    }

    for(let i = 0; i < companionList.length; i++) {
        const mano = companionList[i];
        const comp = new Companion(i, mano.firstName, mano.lastName, mano.area);
        for(const product of mano.products) {
            comp.addProduct(product);
        }
        console.log(comp)
        factory.addMano(comp);
        console.log(factory);
    }
}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;
    const companion = factory.getMano(companionId);
    refreshProductList(companion);
}
