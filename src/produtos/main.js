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
