import { products } from "../../database/produtos/produtos-db.js";
import { creatingSelectedElements } from './filter.js'
import { initialSection } from './initial.js'

export function listFilterSearchInput() {
    const inputSearch = document.querySelector('#inputSearch')
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    const datalist = document.querySelector('#datalist')


    inputSearch.addEventListener('input', () => {
        completeSection.innerHTML = ''
        completeSection.style.display = 'none'

        let suggestionsOptions = []
        let filtered = []

        if (inputSearch.value.length >= 2) {

            suggestionsOptions = products.filter((product) => {
                return product.presentation.includes(inputSearch.value)
            })

            for (const suggestion of suggestionsOptions) {
                datalist.innerHTML += `<option value="${suggestion.name}"></option>`
            }


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
            suggestionsOptions = []
            datalist.innerHTML = ''
            completeSection.style.display = 'flex'
            initialSection()
        }
    })
}


