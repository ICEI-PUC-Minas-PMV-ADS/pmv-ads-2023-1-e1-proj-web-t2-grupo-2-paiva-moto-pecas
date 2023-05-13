import { initialSection } from '../initial.js';
import { products } from '../../../database/produtos/produtos-db.js';
import { creatingSelectedElements } from '../filter.js';

export function checkingCheckboxes() {
    let isChecked = false;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break
        }
    }
    if (!isChecked) {
        isChecked;
    }
    return isChecked;
}

export function resetFilter(...marcas) {
    const marcaID = document.querySelectorAll(`${marcas}`)
    const inputSearch = document.querySelector('#inputSearch')
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)

    let filtered = []

    marcaID.forEach((marca) => {
        marca.addEventListener('change', () => {
            if (checkingCheckboxes()) {
                marca.addEventListener('change', () => {
                    if (!checkingCheckboxes() && inputSearch.value.length === 0) {
                        fullDatabase.style.display = 'flex'
                        initialSection()                        
                    }
                    if (!checkingCheckboxes() && inputSearch.value.length !== 0) {
                        filtered = products.filter((product) => {
                            return product.name.includes(inputSearch.value)
                                || product.presentation.includes(inputSearch.value)
                        })
                        containerFilterInputsOptions.innerHTML = ''
                        return filtered.forEach((product) => {
                            const { picture, name, presentation } = product
                            creatingSelectedElements(picture, name, presentation)
                        })
                    }                    
                })
            }
        })
    })


}
