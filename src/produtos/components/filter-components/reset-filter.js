import { initialSection } from '../initial.js';
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

export function resetFilter(database, assets, ...options) {
    const optionID = document.querySelectorAll(`${options}`)
    const inputSearch = document.querySelector('#inputSearch')
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)

    let filtered = []

    optionID.forEach((option) => {
        option.addEventListener('change', () => {
            if (checkingCheckboxes()) {
                option.addEventListener('change', () => {
                    if (!checkingCheckboxes() && inputSearch.value.length === 0) {                                               
                        initialSection(database, assets)
                    }
                    if (!checkingCheckboxes() && inputSearch.value.length !== 0) {                       
                        filtered = database.filter((itens) => {
                            return itens.name.includes(inputSearch.value)
                                || itens.presentation.includes(inputSearch.value)
                        })

                        filtered.length === 0
                            ? containerFilterInputsOptions.innerHTML = `<p>Nenhum produto encontrado</p>`
                            : containerFilterInputsOptions.innerHTML = ''

                        return filtered.forEach((itens) => {
                            const { picture, name, presentation } = itens
                            creatingSelectedElements(picture, name, presentation, assets)
                        })
                    }
                })
            }
        })
    })
}
