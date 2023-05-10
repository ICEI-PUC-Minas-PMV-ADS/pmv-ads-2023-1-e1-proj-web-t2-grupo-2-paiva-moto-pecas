import { products } from "../../database/produtos/produtos-db.js";
import { creatingSelectedElements } from './filter.js'
import { initialSection } from './initial.js'

function datalistSuggestions() {
    const datalist = document.querySelector('#datalist')

    let suggestionsOptions = []

    suggestionsOptions = products.filter(async (product) => {
        return product.presentation.includes(await inputSearch.value)
    })

    datalist.innerHTML = ''
    return suggestionsOptions.map((suggestion) => {
        datalist.innerHTML += `<option value="${suggestion.name}"></option>`
    })
}

export function listFilterSearchInput() {
    const inputSearch = document.querySelector('#inputSearch')
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let filtered = []
    let newFiltered = []

    function returningOnlyItemsFromTheSelectedOptions() {
        checkboxes.forEach(async (checkbox) => {
            if (await checkbox.checked) {
                filtered.forEach((product) => {
                    if (product.brand === checkbox.value || product.category === checkbox.value) {
                        newFiltered.push(product)
                    }
                })

                containerFilterInputsOptions.innerHTML = ''
                return newFiltered.forEach((product) => {
                    const { picture, name, presentation } = product
                    creatingSelectedElements(picture, name, presentation)
                })
            }
        })
    }

    inputSearch.addEventListener('input', () => {

        if (inputSearch.value.length >= 2) {
            completeSection.innerHTML = ''
            completeSection.style.display = 'none'

            datalistSuggestions()

            filtered = products.filter((product) => {
                return product.name.includes(inputSearch.value)
                    || product.presentation.includes(inputSearch.value)
            })

            returningOnlyItemsFromTheSelectedOptions()

            containerFilterInputsOptions.innerHTML = ''
            return filtered.forEach((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(picture, name, presentation)
            })
        } else if (inputSearch.value.length === 0) {
            checkboxes.forEach(async (checkbox) => {
                if (await checkbox.checked) {
                    containerFilterInputsOptions.innerHTML = ''
                    datalist.innerHTML = ''
                    newFiltered = products.filter((product) => {
                        return product.brand === checkbox.value || product.category === checkbox.value
                    })
                    return newFiltered.forEach((product) => {
                        const { picture, name, presentation } = product
                        creatingSelectedElements(picture, name, presentation)
                    })
                }
            })
        }
    })
}


// export class teste {
//     filtered = []
//     newFiltered = []

//     constructor() {
//     }

//     datalistSuggestions() {
//         const datalist = document.querySelector('#datalist')

//         let suggestionsOptions = []

//         suggestionsOptions = products.filter(async (product) => {
//             return product.presentation.includes(await inputSearch.value)
//         })

//         datalist.innerHTML = ''
//         return suggestionsOptions.map((suggestion) => {
//             datalist.innerHTML += `<option value="${suggestion.name}"></option>`
//         })
//     }

        // returningOnlyItemsFromTheSelectedOptions()

// }