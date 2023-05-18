import { initialSection } from './components/initial.js'
import { listingSelectedElements } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'
import { showMoreFullDB } from './components/button-show-more.js'
import { listFilterInputsOptions } from './components/filter-components/list-filter-options.js'
import { listFilterSearchInput } from './components/search.js'
import { menu } from '../components/menu.js'
import { rodape } from '../components/rodape.js'
import { botaoWpp } from '../components/botao-wpp.js'
import { responsiveFilter } from './components/filter-components/responsive-filter.js'
import { products } from '../database/produtos/produtos-db.js'
import { servicos } from '../database/serviços/servicos-db.js'
import { OptionsWithoutSpaces, OptionsWithoutSpacesServices } from './components/filter-components/options.js'


(function main(database, options, assets) {
    menu()
    responsiveFilter()
    initialSection(database, assets)
    listFilterInputsOptions(database)
    const optionsWithHashtag = options.map(option => `#${option}`)
    for (let i = 0; i < options.length; i++) {
        listingSelectedElements(optionsWithHashtag[i], database, assets)
    }
    listFilterSearchInput(database, assets)
    resetFilter(database, assets, optionsWithHashtag)
    showMoreFullDB()
    botaoWpp()
    rodape()

    const title = document.querySelector('title')
    const buttonsChangePage = document.querySelector('#buttonsChangePage')
    const productsButton = buttonsChangePage.querySelector("button:nth-child(1)");
    const servicesButton = buttonsChangePage.querySelector("button:nth-child(2)");

    servicesButton.addEventListener('click', () => {
        title.innerText = `Paiva Moto Peças - Serviços`
        productsButton.style.backgroundColor = 'var(--amarelo-primario)';
        servicesButton.style.backgroundColor = 'var(--amarelo-secundario)';
        main(servicos, OptionsWithoutSpacesServices, 'serviços')
    })

    productsButton.addEventListener('click', () => {
        title.innerText = `Paiva Moto Peças - Produtos`
        productsButton.style.backgroundColor = 'var(--amarelo-secundario)';
        servicesButton.style.backgroundColor = 'var(--amarelo-primario)';
        main(products, OptionsWithoutSpaces, 'produtos')
    })
})(products, OptionsWithoutSpaces, 'produtos')

