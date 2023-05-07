import { products } from '../../database/produtos/produtos-db.js';
import { filterTypes } from './filter-components/filter-types.js'
import { listProducts } from '../main.js'


const brands = products.map((product) => {
    return product.brand
})
const categories = products.map((product) => {
    return product.category
})

export const allItens = [...brands, ...categories].filter((value, index, arr) => arr.indexOf(value) === index);

allItens.map((item) => {
    store.innerHTML += `<div class="card-product" id="filterSection${item.split(' ').join("")}">`
    inputsBrand.innerHTML += `
    <div class="divFilter">
        <input id="${item.split(' ').join("")}" type="checkbox" name="${item}" value="${item}">
        <p>${item}</p>
    </div>`

    filterTypes(brands, 'Categorias')
})

function creatingSelectedElements(filterSection, picture, name, presentation) {
    const filterSectionBrand = document.querySelector(`#filterSection${filterSection}`)
    listProducts(picture, name, presentation, filterSectionBrand)   
}

export function listingSelectedElements(brand, filterSection) {
    const itemID = document.querySelector(`${brand.split(' ').join("")}`)
    const filterSectionBrand = document.querySelector(`#filterSection${filterSection}`)
    let filtered = []

    itemID.addEventListener('change', () => {
        if (itemID.checked === true) {
            filtered = products.filter((product) => {
                return product.brand === itemID.value || product.category === itemID.value
            })
            completeSection.innerHTML = ''
            filtered.map((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    filterSection,
                    picture,
                    name,
                    presentation
                )
            })

        } else if (itemID.checked === false) {
            filterSectionBrand.innerHTML = ''
        }
    })

}






