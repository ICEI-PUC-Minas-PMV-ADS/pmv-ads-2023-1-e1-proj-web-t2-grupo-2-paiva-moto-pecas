import { listCards } from '../../components/list-cards.js'
import { initialSection } from './initial.js'
import { checkingCheckboxes } from './filter-components/reset-filter.js'


export function creatingSelectedElements(picture, name, presentation, assets) {
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    listCards(picture, name, presentation, containerFilterInputsOptions, assets)
}

export function listingSelectedElements(option, database, assets) {
    const optionID = document.querySelector(`${option}`)
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    const fullDatabase = document.querySelector(`#fullDatabase`)
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
            const checkboxesMatchingProducts = database.filter((product) => {
                return product.brand === option || product.category === option;
            });
            filtered.push(...checkboxesMatchingProducts);
        }
    }

    const returningOnlyItemsFromTheSelectedOptions = () => {
        trueCheckboxes()
        checkboxes.forEach((checkbox) => {
            if (checkingCheckboxes() && inputSearch.value.length !== 0) {
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
                    creatingSelectedElements(picture, name, presentation, assets)
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
                        creatingSelectedElements(picture, name, presentation, assets)
                    })
                }
            })
        })
    }
    optionID.addEventListener('change', () => {
        const button = document.querySelector('#button-show-more')
        if (optionID.checked) {

            if (checkingCheckboxes()) {
                button.style.display = 'none'
            }

            trueCheckboxesValue = []
            containerFilterInputsOptions.innerHTML = ``

            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    trueCheckboxesValue.push(checkbox.value);
                }
            })

            let filtered = [];
            for (let option of trueCheckboxesValue) {
                const optionFiltered = database.filter((product) => {
                    return product.brand === option || product.category === option;
                });
                filtered = filtered.concat(optionFiltered);
            }

            filtered = filtered.reduce((unique, item) => {
                return unique.includes(item) ? unique : [...unique, item]
            }, [])

            fullDatabase.innerHTML = ''
            fullDatabase.style.display = 'none'
            filtered.forEach((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    picture,
                    name,
                    presentation,
                    assets
                )
            })
            if (inputSearch.value.length !== 0) {
                returningOnlyItemsFromTheSelectedOptions(database)
                if (newFiltered.length === 0) {
                    containerFilterInputsOptions.innerHTML = `<p>Nenhum produto encontrado</p>`
                }
            }
        } else if (!optionID.checked) {
            filtered = []
            containerFilterInputsOptions.innerHTML = ``
            console.log('oi1');
            if (inputSearch.value.length !== 0) {
                console.log('oi2');
                newFiltered = []
                returningOnlyItemsFromTheSelectedOptions(database)

                containerFilterInputsOptions.innerHTML = ''
                return newFiltered.forEach((product) => {
                    const { picture, name, presentation } = product
                    creatingSelectedElements(picture, name, presentation, assets)
                })
            }

            trueCheckboxes()
            if (inputSearch.value.length === 0 && !checkingCheckboxes()) {
                console.log('oi3');
                containerFilterInputsOptions.innerHTML = ``
                filtered = []
                newFiltered = []
                fullDatabase.style.display = 'flex'
                initialSection(database, assets)
            }
            console.log('oi4');
            filtered = filtered.reduce((unique, item) => {
                return unique.includes(item) ? unique : [...unique, item]
            }, [])

            filtered.forEach((product) => {
                console.log('oi5');
                const { picture, name, presentation } = product
                creatingSelectedElements(
                    picture,
                    name,
                    presentation,
                    assets
                )
            })
        }
    })
}






