/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);

   // TODO 7
    const td = createCell(tableRow);
    td.innerHTML = companion.getName();
    const td1 = createCell(tableRow);
    td1.innerHTML = companion.reszleg;

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    // TODO 11.

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO

    const companionName = document.getElementById('companion_name');
    companionName.style.display = 'block';
    companionName.innerHTML = companion.getName()
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';
    for(const product of companion.products) {
        const row = document.createElement('tr');
        const cell = createCell(row);
        cell.innerHTML = product;
        productTableBody.appendChild(row);
    }
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory){ //TODO 
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    
    // TODO 6
    const id = factory.createID();
    const companion = new Companion(id, firstNameValue, lastNameValue, areaValue);
    factory.addMano(companion);
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    // 12
}