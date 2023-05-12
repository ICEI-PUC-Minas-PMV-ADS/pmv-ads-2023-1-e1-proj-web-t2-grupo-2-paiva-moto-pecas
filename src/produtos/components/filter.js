import { products } from '../../database/produtos/produtos-db.js';
import { filterTypes } from './filter-components/filter-types.js'
import { listCards } from '../../components/list-cards.js'
import { initialSection } from './initial.js'
// import { buttonShowMore } from './button-show-more.js'


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

export function listFilterInputsOptions() {
    const inputsFilterOptions = document.querySelector('#inputsFilterOptions')
    const store = document.querySelector('#store')

    inputsFilterOptions.innerHTML += `<h3 class="">Marcas</h3>`
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


export function creatingSelectedElements(picture, name, presentation) {
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    listCards(picture, name, presentation, containerFilterInputsOptions)
}

// let filteredLength = 0

export function listingSelectedElements(option) {
    const optionID = document.querySelector(`${option}`)
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    const inputSearch = document.querySelector('#inputSearch')
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let filtered = []
    let newFiltered = []
    let trueCheckboxesValue = []



    const trueCheckboxes = () => {
        trueCheckboxesValue = []
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                trueCheckboxesValue.push(checkbox.value);
            }
        })
        trueCheckboxesValue = trueCheckboxesValue.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, [])

        for (const option of trueCheckboxesValue) {
            const checkboxesMatchingProducts = products.filter((product) => {
                return product.brand === option || product.category === option;
            });
            filtered.push(...checkboxesMatchingProducts);
        }
    }



    const returningOnlyItemsFromTheSelectedOptions = () => {
        trueCheckboxes()
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked && inputSearch.value.length !== 0) {                
                const matchingProducts = filtered.filter((product) => {
                    return product.name.includes(inputSearch.value) || product.presentation.includes(inputSearch.value)
                })
                newFiltered.push(...matchingProducts)

                newFiltered = newFiltered.reduce((unique, item) => {
                    return unique.includes(item) ? unique : [...unique, item]
                }, [])

                containerFilterInputsOptions.innerHTML = ``
                return newFiltered.forEach((product) => {
                    const { picture, name, presentation } = product
                    creatingSelectedElements(picture, name, presentation)
                })
            }

            checkbox.addEventListener('change', () => {
                if (!checkbox.checked) {
                    trueCheckboxes()
                    const matchingProducts = newFiltered.filter((product) => {
                        return product.name.includes(inputSearch.value) || product.presentation.includes(inputSearch.value)
                    })
                    newFiltered = []
                    newFiltered.push(...matchingProducts)

                    newFiltered = newFiltered.reduce((unique, item) => {
                        return unique.includes(item) ? unique : [...unique, item]
                    }, [])

                    containerFilterInputsOptions.innerHTML = ``
                    return newFiltered.forEach((product) => {
                        const { picture, name, presentation } = product
                        creatingSelectedElements(picture, name, presentation)
                    })
                }
            })
        })
    }
    optionID.addEventListener('change', () => {
        if (optionID.checked) {
            trueCheckboxesValue = []
            containerFilterInputsOptions.innerHTML = ``
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    trueCheckboxesValue.push(checkbox.value);
                }
            })
            console.log(trueCheckboxesValue);

            let filtered = [];
            for (let option of trueCheckboxesValue) {
                const optionFiltered = products.filter((product) => {
                    return product.brand === option || product.category === option;
                });
                filtered = filtered.concat(optionFiltered);
            }

            filtered = filtered.reduce((unique, item) => {
                return unique.includes(item) ? unique : [...unique, item]
            }, [])
           
            // filteredLength += filtered.length

            completeSection.innerHTML = ''
            completeSection.style.display = 'none'
            filtered.forEach((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    picture,
                    name,
                    presentation
                )
            })
            
            if (inputSearch.value.length !== 0) {
                console.log('entrou');
                returningOnlyItemsFromTheSelectedOptions()
                if (newFiltered.length === 0) {
                    containerFilterInputsOptions.innerHTML = `<p>Nenhum produto encontrado</p>`
                }
            }
            // const spacesByCardsRow = 880 * (Math.floor(filteredLength / 3));
            // buttonShowMore(1000, spacesByCardsRow)
        } else if (!optionID.checked) {
            filtered = []
            containerFilterInputsOptions.innerHTML = ``

            if (inputSearch.value.length !== 0) {
                newFiltered = []
                returningOnlyItemsFromTheSelectedOptions()

                containerFilterInputsOptions.innerHTML = ``
                return newFiltered.forEach((product) => {
                    const { picture, name, presentation } = product
                    creatingSelectedElements(picture, name, presentation)
                })
            }

            trueCheckboxes()            
            if (inputSearch.value.length === 0 && trueCheckboxesValue.length === 0) {
                containerFilterInputsOptions.innerHTML = ``
                filtered = []
                newFiltered = []
                // datalist.innerHTML = ''
                completeSection.style.display = 'flex'
                initialSection()
            }

            filtered = filtered.reduce((unique, item) => {
                return unique.includes(item) ? unique : [...unique, item]
            }, [])            

            filtered.forEach((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    picture,
                    name,
                    presentation
                )
            })
            // const spacesByCardsRow = 880 * (Math.floor(filteredLength / 3));
            // buttonShowMore(600, - spacesByCardsRow)
        }
    })
}






