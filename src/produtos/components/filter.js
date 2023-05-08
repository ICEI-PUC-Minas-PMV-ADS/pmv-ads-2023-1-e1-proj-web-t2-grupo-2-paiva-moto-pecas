import { products } from '../../database/produtos/produtos-db.js';
import { filterTypes } from './filter-components/filter-types.js'
import { listProducts } from './list-itens.js'
import { buttonShowMore } from './button-show-more.js'


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
    store.innerHTML += `<div class="card-product" id="containerFilterInputsOptions">`
    inputsFilterOptions.innerHTML += `
    <div class="divFilter">
        <input id="${option.split(' ').join("")}" type="checkbox" name="${option}" value="${option}">
        <p>${option}</p>
    </div>`

    filterTypes(brands, 'Categorias')
})


function creatingSelectedElements(picture, name, presentation) {
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    listProducts(picture, name, presentation, containerFilterInputsOptions)
    buttonShowMore(800, 2000)
    console.log(creatingSelectedElements.length);

}

export function listingSelectedElements(brand) {
    const optionID = document.querySelector(`${brand}`)
    const containerFilterInputsOptionsBrand = document.querySelector(`#containerFilterInputsOptions`)

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
            containerFilterInputsOptionsBrand.innerHTML = ''
            let newFiltered = []

            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    newFiltered.push(checkbox.value);
                }
            })

            for (const option of newFiltered) {
                const matchingProducts = products.filter((product) => {
                    return product.brand === option || product.category === option;
                });

                filtered.push(...matchingProducts);
            }

            // filtered = products.filter((product) => {
            //     return newFiltered.includes(product.brand) || newFiltered.includes(product.category);
            // })

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






