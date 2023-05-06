import { products } from '../../database/produtos/produtos-db.js';
import { filterTypes } from './filter-types.js'

const brands = products.map((product) => {
    return product.brand
})
const categories = products.map((product) => {
    return product.category
})

export const fullItens = [...brands, ...categories].filter((value, index, arr) => arr.indexOf(value) === index);

fullItens.map((item) => {
    store.innerHTML += `<section class="classProcutos" id="filterSection${item.split(' ').join("")}">`
    inputsBrand.innerHTML += `
    <div class="divFilter">
        <input id="${item.split(' ').join("")}" type="checkbox" name="${item}" value="${item}">
        <p>${item}</p>
    </div>`

    filterTypes(7, 'Categorias')    
})

async function creatingSelectedElements(filterSection, picture, name, presentation) {
    const filterSectionBrand = document.querySelector(`#filterSection${filterSection}`)
    filterSectionBrand.innerHTML += `
            <div class="productUnit" >
                <img class="img" src="../database/produtos/public/${picture}.png" alt="">
                    <h3>${name}</h3>
                    <p>${presentation}</p>
            </div>
           `
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






