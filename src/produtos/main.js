import { initialSection } from './components/initial.js'
import { listingSelectedElements, OptionsWithoutSpaces } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'
// import { buttonShowMore } from './components/button-show-more.js'
import { listFilterInputsOptions } from './components/filter.js'
import { listFilterSearchInput } from './components/search.js'
import { menu } from '../components/menu.js'
import { rodape } from '../components/rodape.js'
import { botaoWpp } from '../components/botao-wpp.js'


function filterSection() {
    const filtersSection = document.querySelector('#filtersSection')
    filtersSection.innerHTML = `
        
    <div id="divFilterTitle">
            <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M5.21753 11.6717V8.39046H25.2175V11.6717H5.21753ZM0.217529 0.0310898H30.2175V3.39046H0.217529V0.0310898ZM11.8582 20.0311V16.6717H18.5769V20.0311H11.8582Z"
                fill="black" />
            </svg>
            <h1>Filtros</h1>
            </div>
    
            <div id="inputsFilterOptions">
    </div>    
    `
}

export function productsMain() {
    menu()
    filterSection()
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
const divFilterTitle = document.querySelector('#divFilterTitle')

addEventListener('resize', () => {
    if (window.innerWidth <= 558) {
        divFilterTitle.style.display = 'none'
        filtersSection.style.cssText = `             
        position: sticky;
        top: 214px;
        left: 60px;
        background-color: var(--cinza-claro);  
        `
        filtersSection.innerHTML = `
        <svg id="click-icon-filter" width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.21753 11.6717V8.39046H25.2175V11.6717H5.21753ZM0.217529 
            0.0310898H30.2175V3.39046H0.217529V0.0310898ZM11.8582 20.0311V16.6717H18.5769V20.0311H11.8582Z"
            fill="black" />
        </svg>    
        `
    } else {
        filterSection()
    }

    document.querySelector('#click-icon-filter').addEventListener('click', () => {        
        filtersSection.style.display = 'flex'
        filtersSection.style.position = 'absolute'
        filtersSection.style.left = '50%'
    })

})

