import { filterTypes } from './filter-types.js'






export function listFilterInputsOptions(database) {
    const inputsFilterOptions = document.querySelector('#inputsFilterOptions')
    const store = document.querySelector('#store')

    const brands = database.map((product) => {
        return product.brand !== '' ? product.brand : 'empty'
    })
    const categories = database.map((product) => {
        return product.category
    })
    let allIOptions



    inputsFilterOptions.innerHTML = ''
    inputsFilterOptions.innerHTML += `<h3>Marcas</h3>`

    if (brands[0] !== 'empty') {
        allIOptions = [...brands, ...categories].filter((value, index, arr) => arr.indexOf(value) === index);
    }
    if (brands.includes('empty')) {
        inputsFilterOptions.innerHTML = ''
        brands.length = 0
        inputsFilterOptions.innerHTML += `<h3>Categorias</h3>`
        allIOptions = categories.filter((value, index, arr) => arr.indexOf(value) === index);
    }

    allIOptions.map((option) => {
        store.innerHTML += `<div class="card-product" id="containerFilterInputsOptions">`
        inputsFilterOptions.innerHTML += `
        <div class="divFilter">
            <input id="${option.split(' ').join("")}" type="checkbox" name="${option}" value="${option}">
            <p>${option}</p>
        </div>`

        filterTypes(brands, 'Categorias')
    })
}