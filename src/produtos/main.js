import { initialSection } from './components/initial.js'
import { listingSelectedElements, OptionsWithoutSpaces } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'
// import { buttonShowMore } from './components/button-show-more.js'
import { listFilterInputsOptions } from './components/filter.js'
import { listFilterSearchInput } from './components/search.js'
import { menu } from '../components/menu.js'
import { rodape } from '../components/rodape.js'
import { botaoWpp } from '../components/botao-wpp.js'


export function productsMain() {
    menu()
    initialSection()
    listFilterInputsOptions()
    const optionsWithHashtag = OptionsWithoutSpaces.map(option => `#${option}`)
    for (let i = 0; i < OptionsWithoutSpaces.length; i++) {
        listingSelectedElements(optionsWithHashtag[i])
    }
    listFilterSearchInput()
    resetFilter(optionsWithHashtag)
    // buttonShowMore()
    botaoWpp()
    rodape()
}

productsMain()

const filtersSection = document.querySelector('#filtersSection')
const aside = document.querySelector('aside')
const containerFilter = document.querySelector('#container-filter')
const clickIconFilter = document.querySelector('#click-icon-filter')
const clickCloseFilter = document.querySelector('#click-close-filter')

addEventListener('resize', () => {
    if (window.innerWidth <= 558) {
        containerFilter.style.display = 'none'
        clickIconFilter.style.display = 'flex'
        filtersSection.style.cssText = `             
        position: sticky;
        top: 213px;
        left: 60px;
        background-color: var(--cinza-claro);  
        `
    }

    if (window.innerWidth > 558) {
        containerFilter.style.display = 'grid'
        clickIconFilter.style.display = 'none'
        clickCloseFilter.style.display = 'none'

        aside.style.cssText = `
    padding: 40px 0px;       
    height: fit-content;       
    margin: 32px 0px;       

    top: 32px;
    position: sticky;  
    z-index: 1;

    border-radius: 12px;

    background-color: var(--branco);     
    `
    }
})

document.querySelector('#click-icon-filter').addEventListener('click', () => {
    filtersSection.style.cssText = `             
    position: absolute;
    top: 257px;     
    `
    clickIconFilter.style.display = 'none'
    containerFilter.style.display = 'grid'

    clickCloseFilter.style.cssText = `
        display: grid;
        position: absolute;
        top: 12px;
        right: 0px;        

    `
})

clickCloseFilter.addEventListener('click', () => {
    containerFilter.style.display = 'none'
    clickIconFilter.style.display = 'grid'
    clickCloseFilter.style.display = 'none'

    filtersSection.style.cssText = `             
    position: sticky;
    top: 213px;
    left: 60px;
    background-color: var(--cinza-claro);      
    `
})