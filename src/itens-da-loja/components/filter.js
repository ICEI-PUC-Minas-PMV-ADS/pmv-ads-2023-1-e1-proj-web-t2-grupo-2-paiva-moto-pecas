import { listCards } from '../../components/list-cards.js'
import { initialSection } from './initial.js'
import { customDatalist } from './search.js'

export function filter(database, assets) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const fullDatabase = document.querySelector('#fullDatabase')
    const inputSearch = document.querySelector('#inputSearch')
    const containerPersonalDatalist = document.querySelector('#containerPersonalDatalist')
    const iconSearchBar = document.querySelector('#iconSearchBar')
    const sector = database.find((item) => item.sector === 'Produto')

    let suggestionsOptions = []

    function filterItems() {
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked)
        const searchValue = inputSearch.value.toLowerCase()

        const filteredItems = database.filter(item => {
            const lowercaseBrand = item.brand.toLowerCase()
            const lowercaseCategory = item.category.toLowerCase()
            const lowercaseName = item.name.toLowerCase()
            const lowercasePresentation = item.presentation.toLowerCase()

            const brandMatch = checkedCheckboxes.some(checkbox => {
                const lowercaseValue = checkbox.value.toLowerCase()
                return lowercaseValue === lowercaseBrand || lowercaseValue === lowercaseCategory
            })

            const searchMatch = lowercaseName.includes(searchValue) || lowercasePresentation.includes(searchValue)

            if (checkedCheckboxes.length > 0 && searchValue.length >= 2) {
                return brandMatch && searchMatch
            } else if (checkedCheckboxes.length > 0) {
                return brandMatch
            } else if (searchValue.length >= 2) {
                return searchMatch
            }

            // return true
        })

        return filteredItems
    }

    function renderFilteredCards() {
        const filteredItems = filterItems()

        fullDatabase.innerHTML = ''
        if (filteredItems.length === 0) {
            if (inputSearch.value.length !== 0) {
                fullDatabase.innerHTML = `<p>Nenhum ${sector !== undefined
                    ? 'produto'
                    : 'serviço'} 
                            encontrado</p>`
            } else{
                initialSection(database, assets)
            }
           
        } else {
            filteredItems.forEach(item => {
                const { picture, name, presentation } = item
                listCards(picture, name, presentation, fullDatabase, assets)
            })
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            renderFilteredCards()
        });
    });

    const svgLupa = `<path d="M5.54688 16.8312C7.00521 18.2895 8.77604 19.0187 10.8594 19.0187C12.9427 
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
    const svgX = `<path d="M20 1.32073L18.6792 0L10 8.67915L1.32085 0L0 1.32073L8.67921 
    9.99994L0 18.6792L1.32085 19.9999L10 11.3207L18.6792 19.9999L20 18.6792L11.3208 
    9.99994L20 1.32073Z" fill="black"/> `

    if (inputSearch.value.length === 0) {       
        iconSearchBar.innerHTML = svgLupa
    }

    inputSearch.addEventListener('input', () => {

        if (inputSearch.value.length === 0) {
            suggestionsOptions = []
            containerPersonalDatalist.innerHTML = ''
            containerPersonalDatalist.style.display = 'none'           
            iconSearchBar.innerHTML = svgLupa
        } else {            
            iconSearchBar.innerHTML = svgX
            iconSearchBar.style.cursor = 'pointer'
            iconSearchBar.style.marginTop = '8px'
            const clearInputSearch = (() => {
                iconSearchBar.addEventListener('click', () => {
                    inputSearch.value = ''
                    iconSearchBar.innerHTML = ''
                    iconSearchBar.style.cursor = 'default'
                    iconSearchBar.style.marginTop = '0px'
                    iconSearchBar.innerHTML = svgLupa
                    initialSection(database, assets)
                })
            })();
        }

        if (inputSearch.value.length >= 2) {
            customDatalist(database, assets, suggestionsOptions, containerPersonalDatalist)
        }

        renderFilteredCards()
    });
}
