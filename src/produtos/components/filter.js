import { products } from '../../database/produtos/produtos-db.js';
import { filterTypes } from './filter-components/filter-types.js'
import { listProducts } from './list-itens.js'

const brands = products.map((product) => {
    return product.brand
})
const categories = products.map((product) => {
    return product.category
})

const allIOptions = [...brands, ...categories].filter((value, index, arr) => arr.indexOf(value) === index);
export const OptionsWithoutSpaces = []
allIOptions.map((option) => {
    OptionsWithoutSpaces.push(option.split(' ').join(""))
})

allIOptions.map((option) => {
    store.innerHTML += `<div class="card-product" id="filterSection">`
    inputsFilterOptions.innerHTML += `
    <div class="divFilter">
        <input id="${option.split(' ').join("")}" type="checkbox" name="${option}" value="${option}">
        <p>${option}</p>
    </div>`

    filterTypes(brands, 'Categorias')
})

function creatingSelectedElements(picture, name, presentation) {
    const filterSection = document.querySelector(`#filterSection`)
    listProducts(picture, name, presentation, filterSection)
}

export function listingSelectedElements(brand) {
    const optionID = document.querySelector(`${brand}`)
    const filterSectionBrand = document.querySelector(`#filterSection`)
    let filtered = []

    optionID.addEventListener('change', () => {
        if (optionID.checked) {
            filtered = products.filter((product) => {
                return product.brand === optionID.value || product.category === optionID.value
            })
            completeSection.innerHTML = ''
            filtered.map((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    picture,
                    name,
                    presentation
                )
            })
        } else if (!optionID.checked) {
            filtered = []
            filterSectionBrand.innerHTML = ''
            let newFiltered = []

            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    newFiltered.push(checkbox.value);
                }
            })          

            filtered = products.filter((product) => {
                return newFiltered.includes(product.brand) || newFiltered.includes(product.category);
            })
          
            filtered.map((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    picture,
                    name,
                    presentation
                )
            })

        }

    })

}





