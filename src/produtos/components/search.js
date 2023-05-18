import { creatingSelectedElements } from './filter.js'
import { initialSection } from './initial.js'
import { checkingCheckboxes } from './filter-components/reset-filter.js'

function datalistSuggestions(database) {
    const datalist = document.querySelector('#datalist')

    let suggestionsOptions = []

    suggestionsOptions = database.filter(async (product) => {
        return product.presentation.includes(await inputSearch.value)
    })

    datalist.innerHTML = ''
    return suggestionsOptions.map((suggestion) => {
        datalist.innerHTML += `<option value="${suggestion.name}"></option>`
    })
}



export function listFilterSearchInput(database, assets) {
    const inputSearch = document.querySelector('#inputSearch')
    const containerFilterInputsOptions = document.querySelector(`#containerFilterInputsOptions`)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const fullDatabase = document.querySelector('#fullDatabase')

    let filtered = []
    let newFiltered = []
    let trueCheckboxesValue = []


    const lupa = document.querySelector('#lupa')
    if (inputSearch.value.length === 0) {
        lupa.innerHTML = ''
        lupa.innerHTML += `<path d="M5.54688 16.8312C7.00521 18.2895 8.77604 19.0187 10.8594 19.0187C12.9427 
        19.0187 14.7135 18.2895 16.1719 16.8312C17.6302 15.3729 18.3594 13.602 18.3594 
        11.5187C18.3594 9.43537 17.6302 7.66454 16.1719 6.20621C14.7135 4.74787 12.9427 
        4.01871 10.8594 4.01871C8.77604 4.01871 7.00521 4.74787 5.54688 6.20621C4.08854 
        7.66454 3.35938 9.43537 3.35938 11.5187C3.35938 13.602 4.08854 15.3729 5.54688 
        16.8312ZM20.8594 19.0187L29.1406 27.3L26.6406 29.8L18.3594 21.5187V20.1906L17.8906 
        19.7218C15.9115 21.4406 13.5677 22.3 10.8594 22.3C7.83854 22.3 5.26042 21.2583 3.125 
        19.175C1.04167 17.0916 0 14.5395 0 11.5187C0 8.49787 1.04167 5.94579 3.125 3.86246C5.26042 
        1.72704 7.83854 0.659332 10.8594 0.659332C13.8802 0.659332 16.4323 1.72704 18.5156 
        3.86246C20.599 5.94579 21.6406 8.49787 21.6406 11.5187C21.6406 12.6125 21.3802 13.8625 
        20.8594 15.2687C20.3385 16.6229 19.7396 17.7166 19.0625 18.55L19.5312 19.0187H20.8594Z" fill="black" />
        `
    }

    function personalDatalist(href) {
        const containerPersonalDatalist = document.querySelector('#containerPersonalDatalist')

        let suggestionsOptions = []

        suggestionsOptions = database.filter((product) => {
            return product.presentation.includes(inputSearch.value)
        })

        suggestionsOptions.length = 5

        containerPersonalDatalist.innerHTML = ''
        return suggestionsOptions.map((suggestion) => {
            containerPersonalDatalist.innerHTML += `
                <a href="${href}" id="personalDatalist">
                    <img src="../database/produtos/assets/${suggestion.picture}.png" alt="">
                    <p>${suggestion.name} - ${suggestion.presentation}</p>                   
                </a>
            `
        })
    }

    const trueCheckboxes = () => {
        trueCheckboxesValue = []
        newFiltered = []
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
                return product.brand === option 
                || product.category === option;
            });
            newFiltered.push(...checkboxesMatchingProducts);
        }
    }

    function returningOnlyItemsFromTheSelectedOptions() {
        checkboxes.forEach(async (checkbox) => {
            if (await checkbox.checked) {
                filtered.forEach((product) => {
                    if (product.brand === checkbox.value || product.category === checkbox.value) {
                        newFiltered.push(product)
                    }
                })

                newFiltered = newFiltered.reduce((unique, item) => {
                    return unique.includes(item) ? unique : [...unique, item]
                }, [])

                containerFilterInputsOptions.innerHTML = ''
                return newFiltered.forEach((product) => {
                    const { picture, name, presentation } = product
                    creatingSelectedElements(picture, name, presentation, assets)
                })
            }
        })
    }

    const inCaseTheSearchInputBecomesEmpty = () => {
        lupa.innerHTML = ''
        lupa.style.cursor = 'default'
        lupa.style.marginTop = '0px'
        lupa.innerHTML += `<path d="M5.54688 16.8312C7.00521 18.2895 8.77604 19.0187 10.8594 19.0187C12.9427 
            19.0187 14.7135 18.2895 16.1719 16.8312C17.6302 15.3729 18.3594 13.602 18.3594 
            11.5187C18.3594 9.43537 17.6302 7.66454 16.1719 6.20621C14.7135 4.74787 12.9427 
            4.01871 10.8594 4.01871C8.77604 4.01871 7.00521 4.74787 5.54688 6.20621C4.08854 
            7.66454 3.35938 9.43537 3.35938 11.5187C3.35938 13.602 4.08854 15.3729 5.54688 
            16.8312ZM20.8594 19.0187L29.1406 27.3L26.6406 29.8L18.3594 21.5187V20.1906L17.8906 
            19.7218C15.9115 21.4406 13.5677 22.3 10.8594 22.3C7.83854 22.3 5.26042 21.2583 3.125 
            19.175C1.04167 17.0916 0 14.5395 0 11.5187C0 8.49787 1.04167 5.94579 3.125 3.86246C5.26042 
            1.72704 7.83854 0.659332 10.8594 0.659332C13.8802 0.659332 16.4323 1.72704 18.5156 
            3.86246C20.599 5.94579 21.6406 8.49787 21.6406 11.5187C21.6406 12.6125 21.3802 13.8625 
            20.8594 15.2687C20.3385 16.6229 19.7396 17.7166 19.0625 18.55L19.5312 19.0187H20.8594Z" fill="black" />
            `
        checkboxes.forEach(async (checkbox) => {
            if (await checkbox.checked) {
                containerFilterInputsOptions.innerHTML = ''
                containerPersonalDatalist.innerHTML = ''
                filtered = []
                newFiltered = []
                trueCheckboxes()

                newFiltered = newFiltered.reduce((unique, item) => {
                    return unique.includes(item) ? unique : [...unique, item]
                }, [])

                return newFiltered.forEach((product) => {
                    const { picture, name, presentation } = product
                    creatingSelectedElements(picture, name, presentation, assets)
                })
            }
            if (!checkingCheckboxes() && inputSearch.value.length === 0) {
                containerFilterInputsOptions.innerHTML = ''
                containerPersonalDatalist.innerHTML = ''
                filtered = []
                newFiltered = []
                fullDatabase.style.display = 'flex'
                initialSection(database, assets)
            }
        })
    }

    inputSearch.addEventListener('input', () => {

        if (inputSearch.value.length !== 0) {
            lupa.innerHTML = ''
            lupa.innerHTML += `<path d="M20 1.32073L18.6792 0L10 8.67915L1.32085 0L0 1.32073L8.67921 
            9.99994L0 18.6792L1.32085 19.9999L10 11.3207L18.6792 19.9999L20 18.6792L11.3208 
            9.99994L20 1.32073Z" fill="black"/> `
            lupa.style.cursor = 'pointer'
            lupa.style.marginTop = '8px'
            lupa.addEventListener('click', () => {
                inputSearch.value = ''
                inCaseTheSearchInputBecomesEmpty()
            })
        }

        if (inputSearch.value.length >= 2) {
            containerFilterInputsOptions.innerHTML = ``
            containerPersonalDatalist.innerHTML = ''
            fullDatabase.style.display = 'none'
            newFiltered = []
            filtered = []       

            personalDatalist()

            filtered = database.filter((product) => {
                return product.name.includes(inputSearch.value)
                    || product.presentation.includes(inputSearch.value)
            })

            returningOnlyItemsFromTheSelectedOptions()

            if (filtered.length === 0) {
                containerFilterInputsOptions.innerHTML = `<p>Nenhum produto encontrado</p>`
            } else {
                containerFilterInputsOptions.innerHTML = ''
            }

            return filtered.forEach((product) => {
                const { picture, name, presentation } = product
                creatingSelectedElements(picture, name, presentation, assets)
            })
        } else if (inputSearch.value.length === 0) {
            inCaseTheSearchInputBecomesEmpty()
        }
    })
}
