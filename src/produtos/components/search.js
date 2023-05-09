import { products } from "../../database/produtos/produtos-db.js";
import { creatingSelectedElements } from './filter.js'
import { initialSection } from './initial.js'

export function listFilterSearchInput() {
    const inputSearch = document.querySelector('#inputSearch')
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    const datalist = document.querySelector('#datalist')

    let datalistSuggestions = []

    datalistSuggestions = products.filter((product) => {
        product.presentation.includes(inputSearch.value)
    })

    for (const suggestion of datalistSuggestions) {
        datalist.innerHTML = `<option value="${suggestion.name}">
        <img src="${t}"></img>
        </option>`
    }

    inputSearch.addEventListener('input', () => {
        completeSection.innerHTML = ''
        completeSection.style.display = 'none'

        let filtered = []

        if (inputSearch.value.length >= 2) {
            filtered = products.filter((product) => {
                return product.name.includes(inputSearch.value)
                    || product.presentation.includes(inputSearch.value)

            })

            containerFilterInputsOptions.innerHTML = ''
            filtered.map((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(picture, name, presentation)
            })
        } else if (inputSearch.value.length === 0) {
            containerFilterInputsOptions.innerHTML = ''
            filtered = []
            completeSection.style.display = 'flex'
            initialSection()
        }
    })
}


