import { initialSection } from './components/initial.js'
import { listingSelectedElements, OptionsWithoutSpaces } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'
import { buttonShowMore } from './components/button-show-more.js'
import { listFilterInputsOptions } from './components/filter.js'
import { listFilterSearchInput } from './components/search.js'



export function productsMain() {
    initialSection()
    listFilterInputsOptions()
    const optionsWithHashtag = OptionsWithoutSpaces.map(option => `#${option}`)
    for (let i = 0; i < OptionsWithoutSpaces.length; i++) {
        listingSelectedElements(optionsWithHashtag[i])
    }
    listFilterSearchInput()
    resetFilter(optionsWithHashtag)
    buttonShowMore(1810, 4300)
}

productsMain()



// export function productButtonF() {
//     const productButton = document.querySelector('#buttonsChangePage button:first-child')
//     const serviceButton = document.querySelector('#buttonsChangePage button:nth-child(2)')
//     const containerFilterInputsOptionsBrand = document.querySelector(`#containerFilterInputsOptions`)

//     productButton.addEventListener('click', () => {
//         productButton.style.backgroundColor = 'var(--amarelo-primario)'
//         serviceButton.style.backgroundColor = 'var(--amarelo-secundario)'
//         completeSection.innerHTML = ''
//         containerFilterInputsOptionsBrand.innerHTML = ''
//         inputsFilterOptions.innerHTML = ''
//         location.reload()
//     });
// }


// export function serviceButtonF() {
//     const serviceButton = document.querySelector('#buttonsChangePage button:nth-child(2)')
//     const productButton = document.querySelector('#buttonsChangePage button:first-child')
//     const containerFilterInputsOptionsBrand = document.querySelector(`#containerFilterInputsOptions`)

//     productButton.style.backgroundColor = 'var(--amarelo-primario)'
//     serviceButton.addEventListener('click', () => {
//         productButton.style.backgroundColor = 'var(--amarelo-secundario)'
//         serviceButton.style.backgroundColor = 'var(--amarelo-primario)'
//         completeSection.innerHTML = ''
//         containerFilterInputsOptionsBrand.innerHTML = ''
//         inputsFilterOptions.innerHTML = ''
//     });

// }

// productButtonF()
// serviceButtonF()







